import React, { Component } from 'react';
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
            <div class="modal">
            <HelpModal />
            {/* <AuthModal /> */}
            </div>
        );
    }
}

export default Modal;