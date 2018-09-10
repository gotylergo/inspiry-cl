import React, { Component } from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div className="auth-form register-form">
                <form>
                    <label htmlFor="display-name">display name</label>
                    <input type="text" name="display-name" className="shadow" required />
                    <label htmlFor="display-name">email address</label>
                    <input type="email" name="display-name" className="shadow" required />
                    <label htmlFor="email-address">email address</label>
                    <input type="text" name="email-address" className="shadow" required />
                    <label htmlFor="password">password</label>
                    <input type="password" minLength="8" className="shadow" required />
                    <button className="button shadow">register</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm;