import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HelpModal from './help-modal';
import AuthModal from './auth-modal';
import { toggleModal } from '../actions';
import './modal.css';

class Modal extends Component {

    render() {

        const ModelContent = () => {
            if (this.props.modalActive === "help") {
                return (<HelpModal />)
            } else if (this.props.modalActive === "auth") {
                return (<AuthModal />)
            }
            return (
                <div className="modal-container" >
                    <p>Oops! You weren't supposed to see this!</p>
                    <p>Stop looking! Close me! 🙈</p>
                </div>
            )
        }
        return (
            <div className="modal shadow" onClick={this.props.toggleModal} >
                <div className="modal-container shadow">
                    <div className="close-btn-container"><button onClick={this.props.toggleModal} className="button close-button"><FontAwesomeIcon icon="times" className="shadow-fa" /></button></div>
                    <ModelContent />
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    mainMenuActive: state.mainMenuActive,
    modalActive: state.modalActive
})

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Modal)
