import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="sign-in-form">
                <form>
                    <label for="email-address">email address</label>
                    <input type="text" name="email-address" />
                    <label for="password">password</label>
                    <input type="password" minlength="8" />
                    <button>sign in</button>
                </form>
            </div>
        )
    }
}

export default Login;