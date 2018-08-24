import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends Component {

    render() {

        return (
            <div className="menu-button">
                <a href="#"><FontAwesomeIcon icon="bars" /></a>
            </div>
        )
    }
}

export default Menu;