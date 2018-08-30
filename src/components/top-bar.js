import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './top-bar.css';

class TopBar extends Component {
    state = {}
    render() {
        return (
            <header className="top-bar">
                <FontAwesomeIcon icon="bars" className="menu-button"  role="button" aria-label="Open main menu" />
                <span className="app-title">my stories</span>
            </header>
        );
    }
}

export default TopBar;