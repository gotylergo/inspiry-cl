import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav-menu.css';

class NavMenu extends Component {
    render() {
        return (
                <nav role="nav" id="nav-menu">
                    <ul>
                        <li><span className="help-button" aria-label="new story" title="new story" >
                                <span className="nav-label">new story</span> <FontAwesomeIcon icon="plus"  className="nav-button" />
                        </span></li>
                        <li><span className="help-button" aria-label="new story" title="new story" >
                                <span className="nav-label">help</span> <FontAwesomeIcon icon="question-circle"  className="nav-button" />
                        </span></li>
                        <li><span className="sign-out-button hide-me" aria-label="sign out" title="sign out" >
                                <span className="nav-label">sign out</span> <FontAwesomeIcon icon="sign-out" className="nav-button" />
                        </span></li>
                    </ul>
                </nav>
        )
    }
}

export default NavMenu;