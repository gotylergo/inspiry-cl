import React, { Component } from 'react';
import SignInForm from './sign-in-form';
// import Register from './register-form';
import './auth-modal.css';

class AuthModel extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         modal: hidden
    //     }
    //     this.toggleModal=this.toggleModal.bind(this)
    // }
    // toggleModal(){
    //     if (this.state.visibility = auth) {
    //         this.setState = ({
    //             "modal": "auth"
    //         });
    //     } else if (this.state.visibility = help) {
    //         this.setState = ({
    //             "modal": "help"
    //         });
    //     } else {
    //         this.setState = ({
    //             "modal": "hidden"
    //         })
    //     }
    // }
    render() {
        return (
            <div className="auth-modal">
                <div className="auth-menu">
                    <button className="button sign-in-button active-button text-shadow">Sign In</button> <button className="button register-button inactive-button text-shadow">Register</button>
                </div>
                <SignInForm />
                {/* <RegisterForm /> */}
            </div>
        )
    }
}

export default AuthModel;