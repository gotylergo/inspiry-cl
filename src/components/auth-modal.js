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
  }

  changeForm(e, form) {
    this.setState({
      authForm: form,
    });
  }

  render() {
    const AuthForm = () => {
      if (this.state.authForm === 'signin') {
        return (<SignInForm />);
      } else if (this.state.authForm === 'register') {
        return (<RegisterForm />);
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
          <button className={this.state.authForm === 'signin' ? activeBtnClass : inactiveBtnClass} onClick={(e, form = 'signin') => this.changeForm(e, form)} >Sign In</button> <button className={this.state.authForm === 'register' ? activeBtnClass : inactiveBtnClass} onClick={(e, form = 'register') => this.changeForm(e, form)} >Register</button>
        </div>
        <AuthForm />
      </div>
    );
  }
}

export default AuthModel;
