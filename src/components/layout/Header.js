import React from 'react'
import AddBeer from '../AddBeer';


function Header(props) {
  return (
    <header style={headerStyle} >
        <h1>Beer Cooler</h1>
        <p>There are <span style={{color: 'red'}}>{props.beer_count}</span> beers in the cooler</p>
        <AddBeer addBeer={props.addBeer}/>
        {props.showSuccess && <SuccessMsg />}
    </header>
  )
}
const SuccessMsg = () => (
    <p style={{color: '#00FF00', position: 'absolute'}}>Added to the Fridge!</p>
    
)

const headerStyle = {
    textAlign: 'center',
    color: 'white',
    padding: '75px',
    backgroundImage:'linear-gradient(to right top, #210537, #300f5d, #391d88, #372db8, #1241eb)',

}

export default Header;