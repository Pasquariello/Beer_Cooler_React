import React from 'react';
import faker from 'faker';

// const BeerCard = (props) => {  
class BeerDetails extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            active: false
        };
    }

    toggleModal(){
        console.log('modal')
        this.setState({
            active: !this.state.active
          })
        console.log(this.state.active)
    }


    

    render () {
        const { id, name, likes } = this.props.beer;
        return (
            <div>
            <div onClick={this.toggleModal.bind(this)} className="ui basic blue button">More Details</div>
            <div className={this.state.active ? 'active ui modal tiny ' : 'ui modal mini'}  show={this.state.active}>
                <i className="close icon" style={{color: 'black'}} onClick={this.toggleModal.bind(this)}></i>
                <div className="header">
                {name}
                </div>
                <div className="image content">
                    <div className="ui medium image">
                        <img src={faker.image.abstract()}/>
                    </div>
                    <div className="description">
                    <div className="ui header">We've auto-chosen a profile image for you.</div>
                    <p>We've grabbed the following image from the <a href="https://www.gravatar.com" target="_blank">gravatar</a> image associated with your registered e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                    </div>
                </div>
                <div className="actions">
                    <div className="ui black deny button">
                    Nope
                    </div>
                    <div className="ui positive right labeled icon button">
                    Yep, that's me
                    <i className="checkmark icon"></i>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default BeerDetails;

