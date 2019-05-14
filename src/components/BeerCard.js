import React from 'react';

// const BeerCard = (props) => {  
class BeerCard extends React.Component {




    render () {
        const { id, name, likes } = this.props.beer;
        const { like, dislike } = this.props;

        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header" style={{float: "left"}}>
                            {name}
                        </div>
                     
                    </div>
                    <div className="extra content">

                            <i style={{marginRight: "5px" }} className={likes > 0 ? "fas fa-thumbs-up" : "fas fa-thumbs-down"}></i>
                            {likes}  <a style={{margin: "5px"}} href="/" onClick={like.bind(this, id)}>like</a>
                             / 
                             <a style={{margin: "5px"}} href="/" onClick={dislike.bind(this, id)}>dislike</a>
                    </div>
                    <div className="extra content">
                        <div onClick={this.props.delBeer.bind(this, id)} className="ui animated inverted green button" tabindex="0">
                            <div className="visible content">Drink</div>
                            <div className="hidden content">
                                <i className="fas fa-beer"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BeerCard;

