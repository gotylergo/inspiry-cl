import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="sign-in-form">
                <form>
                    <label for="display-name">display name</label>
                    <input type="text" name="display-name" required />
                    <label for="display-name">email address</label>
                    <input type="email" name="display-name" required />
                    <label for="email-address">email address</label>
                    <input type="text" name="email-address" required />
                    <label for="password">password</label>
                    <input type="password" minlength="8" required />
                    <button>register</button>
                </form>
            </div>
        )
    }
}

export default Register;