import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './modal.css';

class ErrorModal extends Component {
  render() {
    return (
      <div className="error-modal">
        <h3>Uh oh...</h3>
        <p>Something went wrong. Try that again?</p>
        <button className="button shadow" onClick={this.props.toggleModal('')} >let’s go back</button>
      </div>
    );
  }
}

ErrorModal.propTypes = {
  toggleModal: PropTypes.func,
};

export default ErrorModal;
