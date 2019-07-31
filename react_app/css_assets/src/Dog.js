import React, { Component } from 'react';
import './Dog.css';
import dog from './pedro-dutra-TlpxBaOdrWY-unsplash.jpg';

class Dog extends Component {
    render(){
        return(
            // it's convention to put classes on top level of component.
            <div className="Dog">
                <h1>Dog!</h1>
                <img className="Dog-img" src={dog}></img>
            </div>
        )
    }
}


export default Dog;