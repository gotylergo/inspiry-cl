import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {toggleMainMenu} from '../actions';
import {toggleModal} from '../actions';
import './main-menu.css';

class MainMenu extends Component {
    openModal(e, modal) {
        e.preventDefault();
        this.props.dispatch(toggleMainMenu());
        this.props.dispatch(toggleModal(modal));
    }
    render() {
        return (
            <nav id="main-menu" className={this.props.mainMenuActive ? "main-menu main-menu-open" : "main-menu main-menu-closed"} aria-label="Main menu" aria-expanded="false">
                <button className="button menu-button menu-close"><FontAwesomeIcon icon="bars" aria-label="Close main menu" onClick={this.props.toggleMainMenu} /></button>
                <ul>
                    <li>
                        <NavLink exact to="/" className="button home-button nav-button" activeClassName="active" aria-label="home" onClick={this.props.toggleMainMenu} >home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className="button dashboard-button nav-button" activeClassName="active" aria-label="dashboard" onClick={this.props.toggleMainMenu} >dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/writer" className="button new-story-button nav-button" activeClassName="active" aria-label="help" onClick={this.props.toggleMainMenu} >new story</NavLink>
                    </li>
                    <li>
                        <button className="button help-button nav-button" aria-label="help" onClick={(e, modal="help") => this.openModal(e,modal)} >help</button>
                    </li>
                    <li>
                        <button className="button sign-out-button nav-button" aria-label="sign out" onClick={(e, modal="auth") => this.openModal(e,modal)} >sign in</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    mainMenuActive: state.mainMenuActive
})

export default connect(mapStateToProps)(MainMenu)
