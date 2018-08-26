import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './nav-menu.css';

class NavMenu extends Component {
    render() {
        return (
                <nav role="nav" id="nav-bar">
                    <ul>
                        <li><span class="sign-out-button hide-me">
                            <a href="#">
                                <span class="nav-label">Sign Out</span> <FontAwesomeIcon icon="sign-out" aria-label="Sign Out" title="Home" />
                            </a>
                        </span></li>
                        <li><span class="help-button" aria-label="Help">
                            <a href="/">
                                <span class="nav-label">Help</span> <FontAwesomeIcon icon="question-circle" aria-label="Help" title="Help" />
                            </a>
                        </span></li>
                    </ul>
                </nav>
        )
    }
}

export default NavMenu;