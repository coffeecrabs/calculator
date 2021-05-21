import React, { Component } from 'react';

class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                {this.props.children} //* affiche moi les parametres des enfants de Keypad 
            </div>
        );
    }
}

export default Keypad;


// tu as fait une erreur trouve ton érreur raf je te dit pas plus sinn tu va trouvé //