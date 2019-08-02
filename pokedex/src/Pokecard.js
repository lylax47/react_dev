import React, { Component } from 'react';
import padId from './helpers.js';
import './Pokecard.css';

class Pokecard extends Component {
    static defaultProps = {
        id: 4,
        name: 'Charmander',
        type: 'fire',
        base_experience: 62,
    }

    
    render(){
        let imgSrc = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+ padId(this.props.id) + ".png";
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt="Pokemon"/>
                </div>
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.base_experience}</div>
            </div>
        )
    }

}

export default Pokecard;