import React, { Component } from 'react';
import chooseColor from './helpers';
import Box from './Box';

class Boxes extends Component{
    constructor(props){
        super(props);
        this.createBoxes = this.createBoxes.bind(this);
    }

    static defaultProps = {
        width: 6,
        height: 3,
        
    }

    createBoxes = () => {
        let numBoxes = [];
        var h;
        var w;
        for (h = 0; h < this.props.height; h++){
            let rowList = [];
            for(w = 0; w < this.props.width; w++){
                rowList.push(<td><Box color={chooseColor()}/></td>);
            }
            numBoxes.push(<tr>{rowList}</tr>);
        }
        return numBoxes
    }

    render(){
        return(
            <div>
                <table>
                    {this.createBoxes()}
                </table>
            </div>
        );
    }
}

export default Boxes;