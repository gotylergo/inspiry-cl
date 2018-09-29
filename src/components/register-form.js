import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {API_BASE_URL} from '../config';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
      passwordValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.passwordConfirm) {
      return this.props.setStatus('Passwords do not match.');
    }
    let user = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };
    fetch(`${API_BASE_URL}/users/`,
        {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .then((res) => res.json())
        .then((res) => {
          if (res.username) {
            this.props.changeForm('signin');
            this.props.setStatus('Account created.');
            console.info('Account created', res);
            return Promise.resolve(res);
          }
          return Promise.reject(res);
        })
        .catch((err) => {
          console.error(err.message);
          return this.props.setStatus(JSON.stringify(err.message));
        });
  }

  render() {
    return (
      <div className="auth-form register-form">
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <label htmlFor="name">name</label>
          <input type="text" name="name" required value={this.state.name} onChange={this.handleChange} />
          <label htmlFor="username">username</label>
          <input type="text" name="username" required value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">password</label>
          <input type="password" minLength="8" name="password" required value={this.state.password} onChange={this.handleChange} />
          <label htmlFor="passwordConfirm">confirm password</label>
          <input type="password" minLength="8" name="passwordConfirm" required value={this.state.passwordConfirm} onChange={this.handleChange} />
          <button className="button shadow">register</button>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  setStatus: PropTypes.func,
  changeForm: PropTypes.func,
};

export default RegisterForm;
