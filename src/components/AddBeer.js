import React from 'react';

class AddBeer extends React.Component {
    
    state = {
        beer_name: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBeer(this.state.beer_name);
        
       document.getElementById("addItemForm").reset();
        e.target.name = '';
  
    }

    onChange = (e) => this.setState ({ [e.target.name]: e.target.value });


    render() {
        return (
            <div className="itemRow">
                <form id="addItemForm" onSubmit={ this.onSubmit } style={{display: 'flex'}}>
            
                    <div className="ui action input">
                        <input type="text" name="beer_name" value={this.state.value} placeholder="Buy More Beer..." onChange={this.onChange}/>
                        <button className="ui button">Add</button>
                    </div>
                </form>
          </div>
        )
    }
}

export default AddBeer;