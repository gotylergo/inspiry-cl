import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="auth-form sign-in-form">
                <form>
                    <label htmlFor="email-address">email address</label>
                    <input type="email" name="email-address" required />
                    <label htmlFor="password">password</label>
                    <input type="password" minLength="8" required />
                    <button className="button">sign in</button>
                </form>
            </div>
        )
    }
}

export default Login;