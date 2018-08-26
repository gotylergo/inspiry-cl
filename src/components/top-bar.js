import React, { Component } from 'react';
import NavMenu from './nav-menu';
import './top-bar.css';

class TopBar extends Component {
    state = {}
    render() {
        return (
            <div class="top-bar">
                <NavMenu />
                <span class="app-title">my stories</span>
            </div>
        );
    }
}

export default TopBar;