import React from 'react';
import BeerCard from './BeerCard';

//const BeerList = (props) => {
class BeerList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            display: false
        };

  
    }

    render() {
        return (
      
            <div style={{overflow: "auto", height: "100%"}} className="ui segment stackable equal width centered grid container"> 
                
                {this.props.beer.map((beer, index) => {
                    return (     
                                <div style={{margin: '10px'}}>
                                    <BeerCard toggleModal={this.props.toggleModal} delBeer={this.props.delBeer} like={this.props.like} dislike={this.props.dislike} beer={beer}></BeerCard>
                                </div>    
                    );
   
                })};
        
            </div>
            
        );
    }
}

export default BeerList;