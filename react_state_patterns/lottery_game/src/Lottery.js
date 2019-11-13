import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';


class lottery extends Component {
    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 10
    }

    constructor(props){
        super(props);
        this.state={ numArray: [...new Array(this.props.numBalls)]}; // can use Array.from() as well
        this.genNums = this.genNums.bind(this);
    }

    genNums(e){
        this.setState(s => ({ numArray: s.numArray.map(n => Math.floor(Math.random() * this.props.maxNum))})); //need to always create new array copy
    }

    render(){
        const balls = this.state.numArray.map(num => <Ball number={num} />)
        return(
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div>{balls}</div>
                <button className="Lottery-Button" onClick={this.genNums}>Generate</button>
            </div>
        )
    }
}

export default lottery;