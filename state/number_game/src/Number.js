import React, { Component } from 'react';

class Number extends Component {
    constructor(props){
        super(props);
        this.state = {number: 0};
        this.genNumber = this.genNumber.bind(this);
    }

    genNumber(e){
        let rand = Math.floor(Math.random() * 10);
        console.log(rand);
        this.setState({ number: rand });
    }

    
    render(){
        let msgOrButton = (this.state.number === 7)? <h1>YOU WON!!!</h1>: <button onClick={this.genNumber}>Generate Number</button>
        return(
            <div>
                <h1>The Number is: {this.state.number}</h1> {/* could do {this.state.number === 7 && */}}
                {msgOrButton}
            </div>
        )
    }
}

export default Number;