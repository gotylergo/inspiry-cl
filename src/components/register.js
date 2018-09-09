import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="auth-form register-form">
                <form>
                    <label htmlFor="display-name">display name</label>
                    <input type="text" name="display-name" required />
                    <label htmlFor="display-name">email address</label>
                    <input type="email" name="display-name" required />
                    <label htmlFor="email-address">email address</label>
                    <input type="text" name="email-address" required />
                    <label htmlFor="password">password</label>
                    <input type="password" minLength="8" required />
                    <button className="button">register</button>
                </form>
            </div>
        )
    }
}

export default Register;