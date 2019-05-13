import React from 'react';
import faker from 'faker';
import BeerDetails from './BeerDetails';

// const BeerCard = (props) => {  
class BeerCard extends React.Component {

    render () {
        const { id, name, likes } = this.props.beer;
        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header" style={{float: "left"}}>
                            {name}
                        </div>
                        {/* <div class="ui labeled button" tabindex="0" style={{float: "right"}}>
                            <div class="ui red button">
                                <i class="heart icon"></i> Like
                            </div>
                            <a class="ui basic red left pointing label">
                                {likes}
                            </a>
                        </div> */}
                    </div>
                    <div className="extra content">

                            <i style={{marginRight: "5px" }} className="fas fa-thumbs-up"></i>
                            {likes} likes
                            <div style={{float: "right"}}>
                                <a style={{margin: "5px"}} href="/" onClick={this.props.like.bind(this, id)}>+</a>
                                <a style={{margin: "5px"}} href="/" onClick={this.props.dislike.bind(this, id)}>-</a>
                            </div>
                    </div>
                    <div className="extra content">
                        <div className="ui two buttons">
                            {/* <div onClick={this.props.toggleModal.bind(this)} className="ui basic blue button">More Details</div> */}
                            <BeerDetails beer={this.props.beer}></BeerDetails>
                            <div onClick={this.props.delBeer.bind(this, id)} className="ui basic red button">Drink</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BeerCard;

