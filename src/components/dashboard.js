import React, { Component } from 'react';
import { API_BASE_URL } from '../config';
import TopBar from './top-bar';
import MyStories from './my-stories';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { createPageTitle, toggleModal } from '../actions';
import './dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
  }

  loadStories(token) {
    const myToken = sessionStorage.getItem("token");
    fetch(`${API_BASE_URL}/stories/my-stories`,     {
      method: 'GET',
      headers: {'authorization': `Bearer ${myToken}`}
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText)
        }
        return res.json();
      })
      .then(stories => {
        this.setState({
          stories,
        })
      })
      .catch(err =>
        this.setState({
          error: err
        })
      )
  }

  render() {
    document.title = this.props.docTitle;
    return (
      <div className="dashboard">
        <TopBar />
        <MyStories stories={this.state.stories} />
      </div>
    );
  }
  componentDidMount() {
    this.props.createPageTitle('my stories');
    this.loadStories();
  }
}

Dashboard.propTypes = {
  docTitle: PropTypes.string,
  createPageTitle: PropTypes.func,
};

const mapStateToProps = (state) => ({
  mainMenuActive: state.mainMenuActive,
  pageTitle: state.pageTitle,
  docTitle: state.docTitle,
});

const mapDispatchToProps = (dispatch) => ({
  createPageTitle: (title) => dispatch(createPageTitle(title)),
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
