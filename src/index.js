import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import BeerList from './components/BeerList';
import AddBeer from './components/AddBeer';

//TODO: 
    //add try catch to all axios requests
    //clean voteCalculator
    //double space all functions
    //break up components
    //clean jsx

class App extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            beer_list: [], 
            errMsg: ''
        };
    }


    componentDidMount() {
        this.getAllBeer();
      
        
  
    }


    getAllBeer() {
        axios.get("/v1/beer/")
        .then(res => {
            this.setState({beer_list: res.data})
            console.log(res.data)
        });
    }


    getSingleBeer() {}


    postBeer(beer_name) {

        const new_beer = {
            name: beer_name,
            likes: 0,
          }

        axios.post("/v1/beer/", new_beer)
        .then(res => {
            this.setState({beer_list: [JSON.parse(res.config.data), ...this.state.beer_list]})
            //response does not return with an id so get all beers again so can continue to operate on newly added beers without refreshing
            this.getAllBeer();
        });
    }


    delBeer(id) {

        axios.delete(`/v1/beer/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({ beer_list:[...this.state.beer_list.filter(beer => beer.id !== id)] })

        });

    }

    like(id, e) {
        e.preventDefault()

        let beer_list_clone = [...this.state.beer_list];
        let index = beer_list_clone.findIndex(obj => obj.id === id);
        
        beer_list_clone[index].likes++
        let likes = beer_list_clone[index].likes;

        axios.put(`/v1/beer/${id}`, {likes})
        .then(res => {
            console.log(res);
            console.log(res.data);
            //set state with cloned list due to immutibility
            this.setState({beer_list: beer_list_clone});
        })
    }


    dislike(id, e) {
        e.preventDefault()
 
        let beer_list_clone = [...this.state.beer_list];
        let index = beer_list_clone.findIndex(obj => obj.id === id);
        
        beer_list_clone[index].likes--
        let likes = beer_list_clone[index].likes;

        axios.put(`/v1/beer/${id}`, {likes})
        .then(res => {
            console.log(res);
            console.log(res.data);
            //set state with cloned list due to immutibility
            this.setState({beer_list: beer_list_clone});
        })
    }


    voteCalculator(id, action) {
 
        let beer_list_clone = [...this.state.beer_list];
        let index = beer_list_clone.findIndex(obj => obj.id === id);

        if(action === 'increment') {
            beer_list_clone[index].likes++

        } else {
            beer_list_clone[index].likes--
        }

        let likes = beer_list_clone[index].likes;
        
        return likes;
    }


    render() {
        const beer_list = this.state.beer_list
        return (
            <div>
            <p>There are <span style={{color: 'red'}}>{beer_list.length}</span> beers in the cooler</p>
            <AddBeer addBeer={this.postBeer.bind(this)} style={{margin: '50px'}}/>

                <div className="ui rotate left reveal image"  style={{height: '600px', width: '60%', marginTop:'20px', marginBottom:'20px', marginLeft: '20%', padding: '20px'}}>
                    <div 
                        className="visible content" 
                        style={{height: '650px', width: '100%', backgroundColor: '#91FFE4', borderRadius: '45px', background: '#1e5799', /* Old browsers */
                            background: '-moz-linear-gradient(left, #1e5799 0%, #207cca 10%, #207cca 10%, #2989d8 50%, #7db9e8 100%)', /* FF3.6-15 */
                            background:' -webkit-linear-gradient(left, #1e5799 0%,#207cca 10%,#207cca 10%,#2989d8 50%,#7db9e8 100%)', /* Chrome10-25,Safari5.1-6 */
                            background: 'linear-gradient(to right, #1e5799 0%,#207cca 10%,#207cca 10%,#2989d8 50%,#7db9e8 100%)',/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                            filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#7db9e8',GradientType=1 )" /* IE6-9 */
                    }}>
                        <img src="https://i.pinimg.com/originals/5e/72/de/5e72de9bafa10c53860ac19aac80fd17.png" style={{width: '40px', height: '30px', position: 'absolute', top: '35px', left: '90px',}}/>
                        <img src="https://c4.staticsfly.com/asset/fetch/cs/WPD_STATIONERYCARD_5x7-23813-110-MERCHLARGE_FRONT-ROUNDED_REGULAR/thumbnail.preview/v1" style={{width: '40px', height: '80px', position: 'absolute', top: '225px', left: '40px', transform: 'rotate(-5deg)'}}/>
                        <img src="https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/9e/50/c6/9e50c66a-2b14-424c-2736-82a145c48ca0/859725138877_cover.jpg/600x600bf.png" style={{width: '60px', height: '100px', position: 'absolute', top: '255px', left: '80px', transform: 'rotate(10deg)'}}/>
                        <div style={{width: '15px', height: '100px', backgroundColor: 'black', position: 'absolute', top: '60px', right: '20px', borderRadius: '45px'}}></div>
                        <div style={{width: '100%', height: '2px', backgroundColor: 'grey', position: 'absolute', top: '200px'}}></div>
                        <div style={{width: '15px', height: '150px', backgroundColor: 'black', position: 'absolute', top: '280px', right: '20px', borderRadius: '45px'}}></div>
                    </div>
                    <BeerList className="hidden content" toggleModal={this.toggleModal.bind(this)} delBeer={this.delBeer.bind(this)} like={this.like.bind(this)} dislike={this.dislike.bind(this)} beer={beer_list} ></BeerList>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)