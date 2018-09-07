import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from './main-menu';
import Modal from './modal';
import { toggleMainMenu } from '../actions';
import './top-bar.css';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.toggleMainMenu = this.toggleMainMenu.bind(this);
        this.Modal = this.Modal.bind(this);
        this.openHelpModal = this.openHelpModal.bind(this);
        this.openAuthModal = this.openAuthModal.bind(this);
    }
    toggleMainMenu () {
        this.props.dispatch(toggleMainMenu());
    }
    Modal () {

    }
    openHelpModal() {
        this.props.dispatch(toggleMainMenu());
    }
    openAuthModal() {
        this.props.dispatch(toggleMainMenu());
    }
    render() {
        return (
            <div className="menu-bar-container">
                <header className="top-bar">
                    <FontAwesomeIcon icon="bars" className="menu-button" role="button" aria-label="Open main menu" tabIndex="1" onClick={this.toggleMainMenu} />
                    <span className="app-title">{this.props.pageTitle}</span>
                </header>
                <MainMenu toggleMainMenu={this.toggleMainMenu} openHelpModal={this.openHelpModal} openAuthModal={this.openAuthModal} />
                <Modal />
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