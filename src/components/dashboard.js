import React, { Component } from 'react';
import TopBar from './top-bar';
import MyStories from './my-stories';
import { connect } from 'react-redux';
import { createPageTitle } from '../actions';
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
        this.props.createPageTitle("my stories");
    }
}

const mapStateToProps = state => ({
    mainMenuActive: state.mainMenuActive,
    pageTitle: state.pageTitle,
    docTitle: state.docTitle
});

const mapDispatchToProps = dispatch => ({
  createPageTitle: title => dispatch(createPageTitle(title))
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);