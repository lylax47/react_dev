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

        this.flipCoin = this.flipCoin.bind(this);
        this.randomFlip = this.randomFlip.bind(this);
    }
    static defaultProps = {
        sides: ["heads", "tails"]
    }

    flipCoin(e){
        this.randomFlip();
    }

    randomFlip(){
        let newSide = this.props.sides[Math.floor(Math.random() * 2)];
        this.setState(s => { 
            return {
                side: newSide,
                total: s.total + 1,
                heads: s.heads + (newSide === "heads" ? 1 : 0),
                tails: s.tails + (newSide === "tails" ? 1 : 0)
            }
        })
    }

    
    render(){
        return(
            <div>
                <Coin side={this.state.side}/>
                <button onClick={this.flipCoin}>Flip Me!</button>
                <p>Out of {this.state.total} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default Flip;