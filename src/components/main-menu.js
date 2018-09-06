import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMainMenu } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './main-menu.css';

class MainMenu extends Component {
    render() {
        return (
            <nav id="main-menu" className={this.props.mainMenuActive ? "main-menu main-menu-open" : "main-menu main-menu-closed"} aria-label="Main menu" aria-expanded="false">
                <FontAwesomeIcon icon="bars" className="menu-button menu-close" role="button" aria-label="Open main menu" onClick={() => this.props.dispatch(toggleMainMenu())} />
                <ul>
                    <li>
                        <Link to="/writer" activeClassName="active" ><span className="new-story-button" aria-label="help" title="help" ><span className="nav-label" >new story</span>
                            {/* <FontAwesomeIcon icon="plus" className="nav-button" /> */}
                        </span></Link>
                    </li>
                    <li>
                        <span className="help-button" aria-label="help" title="help" >
                            <span className="nav-label">help</span>
                            {/* <FontAwesomeIcon icon="question-circle" className="nav-button" /> */}
                        </span>
                    </li>
                    <li>
                        <span className="sign-out-button" aria-label="sign out" title="sign out" >
                            <span className="nav-label">sign out</span>
                            {/* <FontAwesomeIcon icon="sign-out" className="nav-button" /> */}
                        </span>
                    </li>
                </ul>
            </nav>
        );
    }
}

// MainMenu.defaultProps = {
//     mainMenuActive: false
// }

const mapStateToProps = state => ({
    mainMenuActive: state.mainMenuActive
})

export default connect(mapStateToProps)(MainMenu);