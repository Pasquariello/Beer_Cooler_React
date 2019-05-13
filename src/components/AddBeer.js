import React from 'react';

class AddBeer extends React.Component {
    
    state = {
        beer_name: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addBeer(this.state.beer_name);
        
        document.getElementById("addItemForm").reset();
  
    }

    onChange = (e) => this.setState ({ [e.target.name]: e.target.value });


    render() {
        return (
            <div className="itemRow">
            <form id="addItemForm" onSubmit={ this.onSubmit } style={{display: 'flex'}}>
           
            <div className="ui action input">
            <input type="text" name="beer_name" value={this.state.value} placeholder="Add Beer ..." onChange={this.onChange}/>
            <button className="ui button" style={{background: 'MediumSeaGreen', color: 'white'}}>Add</button>
            </div>

                {/* <input 
                    type="text" 
                    name="beer_name" 
                    style={{padding: '5px', borderRadius: '45px', borderStyle:'solid', border:'1px solid #cccccc'}}
                    placeholder="Add Beer ..." 
                    value={this.state.value}
                    onChange={this.onChange}
                /> */}
                {/* <input 
                    type="submit" 
                    value="Add" 
                    className="btn"
                    style={{background: 'MediumSeaGreen', borderRadius: '45px', }}
                /> */}
            </form>
          </div>
        )
    }
}

export default AddBeer;