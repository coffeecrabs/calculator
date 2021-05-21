import React, { Component } from 'react'; // importation de react + mes composent //
import "./Calculator.css"; // importation de mon css //

// Déclaration de classe Display + Héritage de mes composent////

class Display extends Component {
    render() {
        return ( // Nom de ma class Display + affichage de la chaine de caractére tapé par l'utilisateur //
            <div className="Display">
                {this.props.data}
            </div>
        );
    }
}
///////// Fin de ma Déclaration de classe ///////////
export default Display;