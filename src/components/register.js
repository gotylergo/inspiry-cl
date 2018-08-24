import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="sign-in-form">
                <form>
                    <label for="display-name">display name</label>
                    <input type="text" name="display-name" />
                    <label for="display-name">email address</label>
                    <input type="text" name="display-name" />                    <label for="email-address">email address</label>
                    <input type="text" name="email-address" />
                    <label for="password">password</label>
                    <input type="password" minlength="8" />
                    <button>register</button>
                </form>
            </div>
        )
    }
}

export default Register;