import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from './main-menu';
import { toggleMainMenu } from '../actions';
import './top-bar.css';

class TopBar extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="menu-bar-container">
                <header className="top-bar">
                    <FontAwesomeIcon icon="bars" className="menu-button" role="button" aria-label="Open main menu" onClick={() => this.props.dispatch(toggleMainMenu())} />
                    <span className="app-title">{this.props.pageTitle}</span>
                </header>
                <MainMenu />
            </div>
        );
    }
}

TopBar.defaultProps = {
    mainMenuActive: false
    // pageTitle: "my stories"
}

  const mapStateToProps = state => ({
    mainMenuActive: state.mainMenuActive,
    pageTitle: state.pageTitle
  });

export default connect(mapStateToProps)(TopBar);