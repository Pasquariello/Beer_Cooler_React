import React from 'react';


class AddBeer extends React.Component {
    

    state = {
        beer_name: ''
    }


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBeer(this.state.beer_name);
        this.setState ({ beer_name: '' });  
    }


    onChange = (e) => this.setState ({ beer_name: e.target.value });


    render() {
        return (
            <div className="">
                <form id="addItemForm" onSubmit={ this.onSubmit }>
                    <div className="ui action input">
                        <input 
                            type="text" 
                            name="beer_name" 
                            value={this.state.beer_name} 
                            placeholder="Buy More Beer..." 
                            onChange={this.onChange} 
                            required
                        />
                        <button className="ui button"><i className="fas fa-plus"></i></button>
                    </div>
                </form>
          </div>
        )
    }
}


export default AddBeer;