import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './modal.css';

class WriterCompleteModal extends Component {
  render() {
    return (
      <div>
        <h3>Great job!</h3>
        <p>Your story is finished! Check it out on your dashboard.</p>
        <Link className="button shadow" onClick={this.props.toggleModal('')} >my stories</Link>
      </div>
    );
  }
}

WriterCompleteModal.propTypes = {
  toggleModal: PropTypes.func,
};

export default WriterCompleteModal;
