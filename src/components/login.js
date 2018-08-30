import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="sign-in-form">
                <form>
                    <label for="email-address">email address</label>
                    <input type="email" name="email-address" required />
                    <label for="password">password</label>
                    <input type="password" minlength="8" required />
                    <button>sign in</button>
                </form>
            </div>
        )
    }
}

export default Login;