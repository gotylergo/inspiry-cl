import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {REACT_APP_API_BASE_URL} from '../config';
import MainMenu from './main-menu';
import Modal from './modal';
import {toggleMainMenu} from '../actions';
import {toggleModal} from '../actions';

import './top-bar.css';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAuthd: false,
    };
    this.signout = this.signout.bind(this);
  }

  checkCredentials() {
    const myToken = sessionStorage.getItem('token');
    if (myToken) {
      fetch(`${REACT_APP_API_BASE_URL}/stories/my-stories`,
          {
            method: 'GET',
            headers: {'authorization': `Bearer ${myToken}`},
          })
          .then((res) => {
            if (!res.ok) {
              return Promise.reject();
            }
            return this.setState({
              stories: res,
            });
          })
          .catch((err) =>
            this.setState({
              userAuthd: false,
            })
          );
    }
  }

  signout() {
    window.sessionStorage.setItem('token', '');
    this.props.toggleMainMenu('inactive');
    return this.setState({
      userAuthd: false,
    });
  }

  componentDidMount() {
    this.checkCredentials();
  }

  render() {
    const OpenModal = () => {
      if (this.props.modalActive !== 'inactive') {
        return (<Modal />);
      }
      return ' ';
    };

    return (
      <div className="top-bar-container" >
        <header className="top-bar shadow-static">
          <button className="button menu-button" aria-label="Open main menu" onClick={this.props.toggleMainMenu} >
            <FontAwesomeIcon icon="bars" />
          </button>
          <div className="page-title">{this.props.pageTitle}</div>
        </header>
        <MainMenu toggleMainMenu={this.props.toggleMainMenu} toggleModal={this.props.toggleModal} closeMenuOpenHelpModal={this.props.closeMenuOpenHelpModal} userAuthd={this.state.userAuthd} signout={this.signout}/>
        <OpenModal />
      </div>
    );
  }
}

TopBar.propTypes = {
  modalActive: PropTypes.string,
  toggleMainMenu: PropTypes.func,
  pageTitle: PropTypes.string,
  toggleModal: PropTypes.func,
  closeMenuOpenHelpModal: PropTypes.func,
  createPageTitle: PropTypes.func,
};

const mapStateToProps = (state) => ({
  pageTitle: state.pageTitle,
  modalActive: state.modalActive,
  userAuthd: state.userAuthd,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMainMenu: () => dispatch(toggleMainMenu()),
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBar);
