import React, { Component } from 'react';
import Ball from './Ball';
import './Lottery.css';


class lottery extends Component {
    constructor(props){
        super(props);
        this.state={ numArray:[0, 0, 0, 0, 0, 0]};
        this.genNums = this.genNums.bind(this);
    }

    static defaultProps = {
        title: "Lotto",
        numBalls: 6,
        maxNum: 10
    }

    genNums(e){
        let outArray = [...new Array(this.props.numBalls)].map(() => Math.floor(Math.random() * this.props.maxNum))
        this.setState({ numArray: outArray })
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