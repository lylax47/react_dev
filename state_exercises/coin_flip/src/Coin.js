import React, { Component } from 'react';
import "./coin.css";

class Coin extends Component {
    render(){
        return(
            <div>
                <img className="coin" src={(this.props.side === "heads")? "https://media.istockphoto.com/photos/cent-coin-isolated-on-white-picture-id476098227":"https://media.istockphoto.com/photos/cent-coin-isolated-on-white-picture-id476098857"}/>
            </div>
        )
    }
}

export default Coin;