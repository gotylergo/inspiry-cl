import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleModal} from '../actions';
import {REACT_APP_API_BASE_URL} from '../config';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userAuthd: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    });
    fetch(`${REACT_APP_API_BASE_URL}/api/auth/login`,
        {
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          if(res.status === 200) {
            return res.json();
          } else {
            Promise.reject(res);
          }
        })
        .then((res) => {
          if (!res.user) {
            return Promise.reject('error: ', res);
          }
          window.sessionStorage.setItem('token', res.authToken);
          this.props.setStatus('Login successful.');
          return this.setState({
            userAuthd: true,
          });
        })
        .catch((err) => {
          console.log(err);
          return console.error(JSON.stringify(err));
        });
  }
  render() {
    return (
      <div className="auth-form sign-in-form" >
        <form onSubmit={(e) => this.handleSubmit(e)}>
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

SignInForm.propTypes = {
  setStatus: PropTypes.func,
  toggleModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  userAuthd: state.userAuthd,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
