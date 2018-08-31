import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './main-menu.css';

class MainMenu extends Component {
    render() {
        return (
            <nav id="main-menu" aria-label="Main menu" aria-expanded="false">
                <FontAwesomeIcon icon="bars" className="menu-button" role="button" aria-label="Open main menu" />
                <ul>
                    <li>
                        <span className="new-story-button" aria-label="help" title="help" ><span className="nav-label">new story</span> <FontAwesomeIcon icon="plus" className="nav-button" /></span>
                    </li>
                    <li>
                        <span className="help-button" aria-label="help" title="help" >
                            <span className="nav-label">help</span> <FontAwesomeIcon icon="question-circle" className="nav-button" /></span>
                    </li>
                    <li>
                        <span className="sign-out-button" aria-label="sign out" title="sign out" >
                            <span className="nav-label">sign out</span> <FontAwesomeIcon icon="sign-out" className="nav-button" /></span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MainMenu;