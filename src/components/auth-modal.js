import React, {Component} from 'react';
import SignInForm from './sign-in-form';
import RegisterForm from './register-form';
import './auth-modal.css';

class AuthModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authForm: 'signin',
    };
    this.changeForm = this.changeForm.bind(this);
    this.setStatus = this.setStatus.bind(this);
  }

  changeForm(form) {
    this.setState({
      authForm: form,
    });
  }

  setStatus(e) {
    this.setState({
      formError: e,
    });
  }

  render() {
    const AuthForm = () => {
      let props = {
        changeForm: (form) => this.changeForm(form),
        setStatus: (err) => this.setStatus(err),
      };
      if (this.state.authForm === 'signin') {
        return (<SignInForm {...props} />);
      } else if (this.state.authForm === 'register') {
        return (<RegisterForm {...props} />);
      }
      return (
        <div className="modal-container" >
          <p>Oops! You weren’t supposed to see that!</p>
          <p>Stop looking! Close me and try that again! <span role="img" aria-label="Cheeky monkey covering eyes" >🙈</span></p>
        </div>
      );
    };

    const activeBtnClass = 'button sign-in-button active-button';
    const inactiveBtnClass = 'button register-button inactive-button';

    return (
      <div className="auth-modal">
        <div className="auth-menu">
          <button
            className={this.state.authForm === 'signin' ? activeBtnClass : inactiveBtnClass} name="signin" onClick={(e) => this.changeForm(e.target.name)} >Sign In</button> <button className={this.state.authForm === 'register' ? activeBtnClass : inactiveBtnClass} name="register" onClick={(e) => this.changeForm(e.target.name)} >Register</button>
        </div>
        <AuthForm />
        <div className="form-status">{this.state.formError}</div>
      </div>
    );
  }
}

export default AuthModel;
