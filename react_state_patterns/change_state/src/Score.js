import React, { Component } from 'react';


class Score extends Component {
    constructor(props){
        super(props);
        this.state = { score: 0}
        this.singlePoint = this.singlePoint.bind(this);
        this.tripleKillGood = this.tripleKillGood.bind(this);
        this.incrementScore = this.incrementScore.bind(this);
    }
    singlePoint(){
        this.setState({ score: this.state.score + 1});
    }
    // tripleKillBad(){ // will result in only one addition. calls are concatenated.
    //     this.setState({ score: this.state.score + 1});
    //     this.setState({ score: this.state.score + 1});
    //     this.setState({ score: this.state.score + 1});
    // }
    // tripleKillOk(){
    //     this.setState(st => {return {score: st + 1}});
    //     this.setState(st => {return {score: st + 1}});
    //     this.setState(st => {return {score: st + 1}});
    // }
    incrementScore(st){
        return { score: st.score + 1} 
    }
    tripleKillGood(){
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }
    render(){
        return(
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singlePoint}>One Point</button>
                <button onClick={this.tripleKillGood}>Three Points</button>
            </div>
        )
    }
}

export default Score;