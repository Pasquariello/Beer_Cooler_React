import React from 'react';
import BeerCard from './BeerCard';


const BeerList = (props) => {
    return (
        <div 
            className="ui stackable equal width centered grid container" 
            style={{marginTop: '50px'}} 
        >     
            {props.beer.map((beer, index) => {
                return (     
                    <div style={{margin: '10px'}} key={index}>
                        <BeerCard 
                            delBeer={props.delBeer} 
                            like={props.like} 
                            dislike={props.dislike} 
                            beer={beer}
                        />
                    </div>    
                )
            })}
        </div>
    );
}


export default BeerList;