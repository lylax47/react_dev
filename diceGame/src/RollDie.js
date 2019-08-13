import React, { Component } from 'react';
import Die from './Die.js';
import './RollDie.css';

class RollDie extends Component {
    constructor(props){
        super(props);
        this.state = {
            value1:'one',
            value2:'one',
            isRolling: false
        };
        this.roll = this.roll.bind(this);
    }
    static defaultProps = {
        wordArray: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    roll(e){
        let rand1 = this.props.wordArray[Math.floor(Math.random() * 6)];
        let rand2 = this.props.wordArray[Math.floor(Math.random() * 6)];
        this.setState({value1: rand1, value2: rand2, isRolling: true}); //setState of both keys in same call.
        setTimeout(() => {
            this.setState({isRolling: false})
        }, 1000);
    }

    render(){
        return(
            <div className="RollDie">
                <div className="RollDie-container">
                    <Die face={this.state.value1} isRolling={this.state.isRolling}/>
                    <Die face={this.state.value2} isRolling={this.state.isRolling}/>
                </div>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}
export default RollDie;