import React, { Component } from 'react';
import './Box.css';
import chooseColor from './helpers.js';

class Box extends Component{
    constructor(props){
        super(props);
        this.state = {
            color : this.props.color
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(){
        this.setState( s => { 
            return {
                color: chooseColor()
            }
        })
    }

    render(){
        return(
            <div onClick={this.changeColor} className="box" style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
}

export default Box;