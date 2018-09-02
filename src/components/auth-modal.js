import React, { Component } from 'react';
import Login from './login';
import Register from './register';
import './modal.css';

class AuthModel extends Component {
    render() {
        return (
            <div className="auth-modal modal">
                <div className="auth-menu">
                    <span className="sign-in-button button">SIGN IN</span> | <span className="register-button button">REGISTER</span>
                </div>
                <Login />
                <Register />
            </div>
        )
    }
}

export default AuthModel;