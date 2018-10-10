import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REACT_APP_CLIENT_BASE_URL } from '../config';
import { PropTypes } from 'prop-types';

class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.copyURL = this.copyURL.bind(this);
  }

  copyURL(e) {
    e.preventDefault();
    e.target.select();
    document.execCommand('copy');
    alert(`Copied your share url: ${e.target.value}`);
  }

  render() {
    return (
      <div className="share-modal">
        <h1>Share your story!</h1>
        <p>Click your share url below to copy the link. Share it on Facebook, Twitter, or your favorite social network and inspire your friends!</p>
        <input type="text" value={`${REACT_APP_CLIENT_BASE_URL}/id/${this.props.shareID}`} onClick={(e) => this.copyURL(e)} readOnly />
      </div>
    );
  }
}

ShareModal.propTypes = {
  copyURL: PropTypes.func,
  shareID: PropTypes.string,
};

const mapStateToProps = (state) => ({
  shareID: state.shareID,
});

export default connect(mapStateToProps)(ShareModal);
