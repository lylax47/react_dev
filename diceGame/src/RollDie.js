import React, { Component } from 'react';
import Die from './Die.js';

class RollDie extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:1
        };
    }

    render(){
        return(
            <div>
                <Die face="one"/>
                <Die face="two"/>
                <button>Roll Die</button>
            </div>
        )
    }
}
export default RollDie;