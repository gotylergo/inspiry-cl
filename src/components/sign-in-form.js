import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {toggleModal} from '../actions';
import {API_BASE_URL} from '../config';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userAuthd: false,
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
    let user = JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    });
    fetch(`${API_BASE_URL}/auth/login`,
        {
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => res.json())
        .then((res) => {
          if (!res.user) {
            return Promise.reject('error: ', res);
          }
          window.sessionStorage.setItem('token', res.authToken);
          this.props.setStatus('Login successful.');
          // this.props.toggleModal('authSuccess');
          return res;
        })
        .catch((err) => {
          console.log(err);
          console.error(err);
          return this.props.setStatus(JSON.stringify(err));
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
};

const mapStateToProps = (state) => ({
  userAuthd: state.userAuthd,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
