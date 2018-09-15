import React, {Component} from 'react';
import TopBar from './top-bar';
import MyStories from './my-stories';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {createPageTitle} from '../actions';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    document.title = this.props.docTitle;
    return (
      <div className="dashboard">
        <TopBar />
        <MyStories />
      </div>
    );
  }
  componentDidMount() {
    this.props.createPageTitle('my stories');
  }
}

Dashboard.propTypes = {
  docTitle: PropTypes.string,
  createPageTitle: PropTypes.string,
};

const mapStateToProps = (state) => ({
  mainMenuActive: state.mainMenuActive,
  pageTitle: state.pageTitle,
  docTitle: state.docTitle,
});

const mapDispatchToProps = (dispatch) => ({
  createPageTitle: (title) => dispatch(createPageTitle(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
