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
      myStories: [],
      loading: true,
    }
    this.loadStories = this.loadStories.bind(this);
  }

  loadStories() {
    const myToken = sessionStorage.getItem("token");
    if (myToken) {
    fetch(`${API_BASE_URL}/stories/my-stories`,     {
      method: 'GET',
      headers: {'authorization': `Bearer ${myToken}`}
    })
      .then(res => {
        if (!res.ok) {
          return this.props.toggleModal("auth");
        }
        return res.json();
      })
      .then(myStories => {
        this.setState({
          myStories,
          loading: false,
        })
      })
      .catch(err =>
        this.setState({
          error: err
        })
      )
  } else {
    this.setState({
      loading: false,
    })
    return this.props.toggleModal("auth");
  }
}

  render() {
    document.title = this.props.docTitle;
    return (
      <div className="dashboard">
        <TopBar />
        <MyStories stories={this.state.myStories} loadStories={this.loadStories} loading={this.state.loading} />
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
  myStories: state.myStories,
});

const mapDispatchToProps = (dispatch) => ({
  createPageTitle: (title) => dispatch(createPageTitle(title)),
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
