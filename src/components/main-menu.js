import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './main-menu.css';

class MainMenu extends Component {
    render() {
        return (
            <nav id="main-menu" className={this.props.mainMenuActive ? "main-menu main-menu-open" : "main-menu main-menu-closed"} aria-label="Main menu" aria-expanded="false">
                <button className="menu-button menu-close"><FontAwesomeIcon icon="bars" className="" role="button" aria-label="Open main menu" onClick={this.props.toggleMainMenu} /></button>
                <ul>
                    <li>
                        <NavLink exact to="/" className="home-button nav-button" activeClassName="active" aria-label="home" title="home" onClick={this.props.toggleMainMenu} >home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard" className="dashboard-button nav-button" activeClassName="active" aria-label="dashboard" title="dashboard" onClick={this.props.toggleMainMenu} >dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/writer" className="new-story-button nav-button" activeClassName="active" aria-label="help" title="help" onClick={this.props.toggleMainMenu} >new story</NavLink>
                    </li>
                    <li>
                        <button className="help-button nav-button" aria-label="help" title="help" onClick={this.props.openHelpModal} >help</button>
                    </li>
                    <li>
                        <button className="sign-out-button nav-button" aria-label="sign out" title="sign out" onClick={this.props.openAuthModal} >sign out</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

MainMenu.defaultProps = {
    mainMenuActive: false,
    appTitle: "inspiry"
}

const mapStateToProps = state => ({
    mainMenuActive: state.mainMenuActive
})

export default connect(mapStateToProps)(MainMenu)
