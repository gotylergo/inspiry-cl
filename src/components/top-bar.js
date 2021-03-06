import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
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
      userAuthed: false,
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
              userAuthed: false,
            })
          );
    }
  }

  signout() {
    window.sessionStorage.setItem('token', '');
    this.props.toggleMainMenu('inactive');
    this.setState({
      userAuthed: false,
    });
    return window.location.reload();
  }

  componentDidMount() {
    this.checkCredentials();
  }
  openHelpModal(e) {
    e.preventDefault();
    this.props.toggleModal('help');
  }

  render() {
    const OpenModal = () => {
      if (this.props.modalActive !== 'inactive') {
        return (<Modal />);
      }
      return ' ';
    };
    const HelpButton = this.props.pageTitle === 'my stories' ? <div className="dash-help-button"><button onClick={(e) => this.openHelpModal(e)}><FontAwesomeIcon icon="question-circle" /></button></div> : '';

    return (
      <div className="top-bar-container" >
        <header className="top-bar shadow-static">
          <button className="button menu-button" aria-label="Open main menu" onClick={this.props.toggleMainMenu} >
            <FontAwesomeIcon icon="bars" />
          </button>
          <div className="page-title" title="home" alt="home"><Link to="/"><FontAwesomeIcon icon="home" /></Link>{this.props.pageTitle}</div>
          {HelpButton}
        </header>
        <MainMenu toggleMainMenu={this.props.toggleMainMenu} toggleModal={this.props.toggleModal} closeMenuOpenHelpModal={this.props.closeMenuOpenHelpModal} userAuthed={this.state.userAuthed} signout={this.signout}/>
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
  userAuthed: state.userAuthed,
});

const mapDispatchToProps = (dispatch) => ({
  toggleMainMenu: () => dispatch(toggleMainMenu()),
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBar);
