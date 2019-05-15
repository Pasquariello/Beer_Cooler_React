import React from 'react';
import AddBeer from '../AddBeer';


function Header(props) {
    return (
    <header style={headerStyle} >
        <h1 style={{fontSize: '3em'}}>Beer Cooler</h1>
        <h3>There are <span style={{color: 'red'}}>{props.beer_count}</span> beers in the cooler</h3>
        <AddBeer addBeer={props.addBeer}/>
        {props.showSuccess && <SuccessMsg />}
    </header>
    )
}


const SuccessMsg = () => (
    <div style={successMsgStyle}><p>Succesfully Added to the Fridge!</p></div>    
)


const successMsgStyle = {
    color: '#00FF00',
    position: 'absolute',
    left: '0',
    right: '0',
    width: '100%'
}


const headerStyle = {
    textAlign: 'center',
    color: 'white',
    padding: '75px',
    backgroundImage:'linear-gradient(to right top, #210537, #300f5d, #391d88, #372db8, #1241eb)',
}
    

export default Header;