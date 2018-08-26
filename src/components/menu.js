import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends Component {

    render() {

        return (
            <div className="menu-button">
                <Link to="/"><span><FontAwesomeIcon icon="bars" /></span></Link>
            </div>
        )
    }
}

export default Menu;