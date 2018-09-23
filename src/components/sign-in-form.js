import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions';
import { API_BASE_URL } from '../config';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }
  // username: this.state.username,
  // password: this.state.password

  handleSubmit(e) {
    e.preventDefault();
    let user = JSON.stringify({
  username: this.state.username,
  password: this.state.password
    });
    console.log(user);
    fetch(`${API_BASE_URL}/auth/login`,
      {
        method: 'POST',
        body: user,
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(res => {
        window.sessionStorage.setItem('token', res.authToken);
        this.props.setStatus('');
        this.props.toggleModal('inactive');
      })
      .catch(err => {
        console.log(err);
        console.error('Invalid username or password');
        return this.props.setStatus('Invalid username or password');
      })
  }

  render() {
    return (
      <div className="auth-form sign-in-form" >
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">username</label>
          <input type="text" name="username" required value={this.state.username} onChange={this.handleChange} />
          <label htmlFor="password">password</label>
          <input type="password" minLength="8" name="password" required value={this.state.password} onChange={this.handleChange} />
          <button className="button shadow">sign in</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userAuthd: state.userAuthd
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
