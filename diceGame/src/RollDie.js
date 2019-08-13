import React, { Component } from 'react';
import Die from './Die.js';

class RollDie extends Component {
    constructor(props){
        super(props);
        this.state = {
            value1:'one',
            value2:'one'
        };
        this.roll = this.roll.bind(this);
    }
    static defaultProps = {
        wordArray: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    roll(e){
        let rand1 = Math.floor(Math.random() * 6);
        let rand2 = Math.floor(Math.random() * 6);
        console.log(rand1, rand2);
        this.setState({value1: this.props.wordArray[rand1]});
        this.setState({value2: this.props.wordArray[rand2]});
    }

    render(){
        return(
            <div>
                <Die face={this.state.value1}/>
                <Die face={this.state.value2}/>
                <br />
                <button onClick={this.roll}>Roll Die</button>
            </div>
        )
    }
}
export default RollDie;