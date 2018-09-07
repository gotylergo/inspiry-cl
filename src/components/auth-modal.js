import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './login';
import Register from './register';
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
                <div className="close-button">
                    <FontAwesomeIcon role="button" className={this.toggleModal + "button"} icon="times" onClick={this.toggleModal} />
                </div>
                <div className="auth-menu">
                    <span className="sign-in-button button">Sign In</span> | <span className="register-button inactive-button button">Register</span>
                </div>
                <Login />
                {/* <Register /> */}
            </div>
        )
    }
}

export default AuthModel;