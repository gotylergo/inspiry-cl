import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './login';
// import Register from './register';
import './auth-modal.css';

class AuthModel extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modal: hidden
    //     }
    //     this.toggleModal=this.toggleModal.bind(this)
    // }
    // toggleModal(){
    //     if (this.state.visibility = auth) {
    //         this.setState = ({
    //             "modal": "auth"
    //         });
    //     } else if (this.state.visibility = help) {
    //         this.setState = ({
    //             "modal": "help"
    //         });
    //     } else {
    //         this.setState = ({
    //             "modal": "hidden"
    //         })
    //     }
    // }
    render() {
        return (
            <div className="auth-modal shadow">
                <button className="close-button"><FontAwesomeIcon icon="times" /></button>
                <div className="auth-menu">
                    <button className="button sign-in-button active-button">Sign In</button> <button className="button register-button inactive-button">Register</button>
                </div>
                <Login />
                {/* <Register /> */}
            </div>
        )
    }
}

export default AuthModel;