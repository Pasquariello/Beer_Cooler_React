import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import BeerList from './components/BeerList';
import Header from './components/layout/Header';


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
            errMsg: '',
            showSuccess: false,
        };
    }


    componentDidMount() {
        this.getAllBeer();
    }


    displayTimer() {
        this.setState({showSuccess: true})

        setTimeout(
            function() {
                this.setState({showSuccess: false})
            }
            .bind(this),
            2000
        );
        
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
            this.displayTimer();

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
                <Header 
                    beer_count={beer_list.length} 
                    addBeer={this.postBeer.bind(this)}
                    showSuccess={this.state.showSuccess}
                />
                        
                <BeerList 
                    className="hidden content" 
                    delBeer={this.delBeer.bind(this)} 
                    like={this.like.bind(this)} 
                    dislike={this.dislike.bind(this)} 
                    beer={beer_list} 
               />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)