import React, { Component } from 'react'; //j'ai importé react + mes composent//
import "./Calculator.css"; // j'ai importé mon fichier css 

///Déclaration de class button + Héritage de mes composent //////

class Button extends Component {
    render() {
        return (
            <div
                className="Button" // nom de ma class 
                onClick={this.props.onClick}
                data-size={this.props.size}
                data-value={this.props.value}>
                {this.props.label}
            </div>
        );
    }
}
/// fin de déclaration de ma classes ////

export default Button;