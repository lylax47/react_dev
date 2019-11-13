import React, { Component } from 'react';
import Coin from './Coin';

class Flip extends Component {
    constructor(props){
        super(props);
        this.state = {
            side: "tails",
            total: 0,
            heads: 0,
            tails: 0
        }

    this.randomFlip = randomFlip.bind(this)
    }

    
    
    render(){
        return(
            <div>
                <Coin />
                <button>Flip Me!</button>
                <p>Out of {</p>
            </div>
        )
    }
}

export default Flip;