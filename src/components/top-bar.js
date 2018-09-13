import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainMenu from './main-menu';
import Modal from './modal';
import { toggleMainMenu } from '../actions';
import { toggleModal } from '../actions';

import './top-bar.css';

class TopBar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.toggleMainMenu = this.toggleMainMenu.bind(this);
        // this.openHelpModal = this.openHelpModal.bind(this);
        // this.openAuthModal = this.openAuthModal.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
    // }
    closeMenu() {
        this.props.dispatch(toggleMainMenu());
    }
    // Modal() {

    // }
    // openHelpModal() {
    //     this.props.dispatch(toggleMainMenu());
    //     this.props.dispatch(toggleModal());
    // }
    // openAuthModal() {
    //     this.props.dispatch(toggleMainMenu());
    //     console.log(toggleMainMenu());
    //     this.props.dispatch(toggleModal());
    // }
    closeModal() {
        this.props.dispatch(toggleModal());
    }
    closeMenuopenModal(modal) {
        this.props.dispatch(toggleMainMenu());
        this.props.dispatch(toggleModal(modal));
    }

    render() {

        const OpenModal = () => {
            if (this.props.modalActive != 'inactive') {
                return (<Modal />)
            }
            return " "
        }

    return(
            <div className = "top-bar-container" >
            <header className="top-bar shadow-static">
                <button className="button menu-button" aria-label="Open main menu" onClick={this.props.toggleMainMenu} >
                    <FontAwesomeIcon icon="bars" />
                </button>
                <div className="page-title">{this.props.pageTitle}</div>
            </header>
            <MainMenu toggleMainMenu={this.props.toggleMainMenu} toggleModal={this.props.toggleModal}
             />
            <OpenModal />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pageTitle: state.pageTitle,
    modalActive: state.modalActive
});

const mapDispatchToProps = dispatch => ({
    toggleMainMenu: () => dispatch(toggleMainMenu()),
    toggleModal: () => dispatch(toggleModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(TopBar);
