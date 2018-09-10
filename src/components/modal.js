import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HelpModal from './help-modal';
// import AuthModal from './auth-modal';
import './modal.css';

class Modal extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         helpModalActive: true
    //     };
    // }
    render() {
        // const HelpModal = this.props.helpModalActive ? (<HelpModal />) : "";
        // const AuthModal = this.props.helpModalActive ? (<AuthModal />) : "";
        return (
            <div className="modal shadow">
                <div className="modal-container shadow">
                    <div className="close-btn-container"><button className="button close-button"><FontAwesomeIcon icon="times" className="shadow-fa" /></button></div>
                    <HelpModal />
                    {/* <AuthModal /> */}
                </div>
            </div >
        );
    }
}

export default Modal;