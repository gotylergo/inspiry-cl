import React, { Component } from 'react';
import Login from './login';
import Register from './register';
import './auth-modal.css';

class AuthModel extends Component {
    render() {
        return (
            <div className="auth-modal">
                <div className="auth-menu">
                    <span className="sign-in-button">SIGN IN</span> | <span className="register-button">REGISTER</span>
                </div>
                <Login />
                <Register />
            </div>
        )
    }
}

export default AuthModel;