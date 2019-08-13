import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Die.css';
 
class Die extends Component {
    render(){
        return(
            <FontAwesomeIcon className="Die" icon={`dice-${this.props.face}`} size="6x"></FontAwesomeIcon>
        )
    }
}

export default Die;