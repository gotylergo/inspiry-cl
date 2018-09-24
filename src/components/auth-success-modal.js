import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './modal.css';

class AuthSuccessModal extends Component {
  render() {
    return (
      <div>
        <h3>Success</h3>
        <p>You have successfully logged in. Checkout your stories.</p>
        <Link to="/dashboard" className="button shadow" role="button" onClick={this.props.toggleModal} >dashboard</Link>
      </div>
    );
  }
}

AuthSuccessModal.propTypes = {
  toggleModal: PropTypes.func,
};

export default AuthSuccess;
