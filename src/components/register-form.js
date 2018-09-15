import React, {Component} from 'react';

class RegisterForm extends Component {
  render() {
    return (
      <div className="auth-form register-form">
        <form>
          <label htmlFor="display-name">display name</label>
          <input type="text" name="display-name" required />
          <label htmlFor="email-address">email address</label>
          <input type="text" name="email-address" required />
          <label htmlFor="password">password</label>
          <input type="password" minLength="8" required />
          <label htmlFor="confirm-password">confirm password</label>
          <input type="confirm-password" minLength="8" required />
          <button className="button shadow">register</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
