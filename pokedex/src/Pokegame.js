import React, { Component } from 'react';
import Pokedex from './Pokedex';
import { splitLists, calcExp } from './helpers.js';
import './Pokegame.css';

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render(){
        let {list1, list2} = splitLists(this.props.pokemon);
        let exp1 = calcExp(list1);
        let exp2 = calcExp(list2);
        let winner1 = (exp1 > exp2)
        let winner2 = (exp2 > exp1)
        console.log(winner1, winner2);
        return(
            <div className="Pokegame">
                <h1 className="Pokegame-title">Pokedex</h1>
                <Pokedex pokemon={list1} exp={exp1} isWinner={winner1}/>
                <Pokedex pokemon={list2} exp={exp2} isWinner={winner2}/>
            </div>
        )
    }
}

export default Pokegame;