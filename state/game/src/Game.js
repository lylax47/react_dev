import React, { Component } from 'react';

class Game extends Component {
    constructor(props){ //similare to props, but how different?
        super(props); 
        this.state = { // You can also initialize state if using babel by just setting this.state. i.e. will work with create react app.
            score: 0,
            gameOver: false
        };
        this.setState({score: 99})
    }
    render(){
        return(
            <div>
                <h1>The score is {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;