import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './login';
import Register from './register';
import './modal.css';
import './auth-modal.css'

class AuthModel extends Component {
    render() {
        return (
            <div className="flex-centered">
                <div className="auth-modal modal">
                <div class="close-button">
                        <FontAwesomeIcon role="button" className="button" icon="times" />
                </div>
                    <div className="auth-menu">
                        <span className="sign-in-button button">Sign In</span> | <span className="register-button inactive-button button">Register</span>
                    </div>
                    <Login />
                    <Register />
                </div>
            </div>
        )
    }
}

export default AuthModel;