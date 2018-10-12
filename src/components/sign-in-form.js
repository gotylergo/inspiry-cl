import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toggleModal} from '../actions';
import {REACT_APP_API_BASE_URL} from '../config';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userAuthed: false,
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
    fetch(`${REACT_APP_API_BASE_URL}/auth/login`,
        {
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          } else if (res.status === 401) {
            return Promise.reject(res);
          }
        })
        .then((res) => {
          window.sessionStorage.setItem('token', res.authToken);
          this.props.setStatus('Login successful.');
          this.props.toggleModal('inactive');
          return this.props.location.pathname === '/dashboard'? window.location.reload(): '';
        })
        .catch((err) => {
           err.message? this.props.setStatus(JSON.stringify(err.message)) : this.props.setStatus('Incorrect username / password');
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  userAuthed: state.userAuthed,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignInForm));
