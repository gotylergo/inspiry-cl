import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toggleMainMenu} from '../actions';
import {toggleModal} from '../actions';
import './main-menu.css';

class MainMenu extends Component {
  openModal(e, modal) {
    e.preventDefault();
    this.props.dispatch(toggleMainMenu());
    this.props.dispatch(toggleModal(modal));
  }
  render() {
    const AuthButton = () => {
      const myToken = sessionStorage.getItem('token');
      if (myToken) {
        return (<button className="button sign-out-button nav-button" aria-label="sign out" onClick={(e) => {
e.preventDefault(); this.props.signout();
}} >sign out</button>);
      }
      return (<button className="button sign-in-button nav-button" aria-label="sign in" onClick={(e, modal='auth') => this.openModal(e, modal)} >sign in</button>);
    };
    return (
      <nav id="main-menu" className={this.props.mainMenuActive ? 'main-menu main-menu-open' : 'main-menu main-menu-closed'} aria-label="Main menu" aria-expanded="false">
        <button className="button menu-button menu-close"><FontAwesomeIcon icon="bars" aria-label="Close main menu" onClick={this.props.toggleMainMenu} /></button>
        <ul>
          <li>
            <NavLink exact to="/" className="button home-button nav-button" activeClassName="active" aria-label="home" onClick={this.props.toggleMainMenu} >home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className="button dashboard-button nav-button" activeClassName="active" aria-label="dashboard" onClick={this.props.toggleMainMenu} >dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/writer" className="button new-story-button nav-button" activeClassName="active" aria-label="help" onClick={this.props.toggleMainMenu} >new story</NavLink>
          </li>
          <li>
            <button className="button help-button nav-button" aria-label="help" onClick={(e, modal = 'help') => this.openModal(e, modal)} >help</button>
          </li>
          <li>
            <AuthButton />
          </li>
        </ul>
      </nav>
    );
  }
}

MainMenu.propTypes = {
  dispatch: PropTypes.func,
  mainMenuActive: PropTypes.bool,
  toggleMainMenu: PropTypes.func,
  docTitle: PropTypes.string,
  createPageTitle: PropTypes.func,
  signout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  mainMenuActive: state.mainMenuActive,
  userAuthd: state.userAuthd,
});

export default connect(mapStateToProps)(MainMenu);
