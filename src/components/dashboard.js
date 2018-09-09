import React, { Component } from 'react';
import TopBar from './top-bar';
// import MainMenu from './main-menu';
import MyStories from './my-stories';
import { connect } from 'react-redux';
// import { createPageTitle } from '../actions';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        document.title = this.props.docTitle;
    }

    render() {

        // this.props.createPageTitle("my stories");

        return (
            <div className="dashboard">
                <TopBar />
                <MyStories />
            </div>
        );
    }
    componentDidMount() {
        // this.props.createPageTitle("my stories");
    }
}

Dashboard.defaultProps = {
    // mainMenuActive: false,
    // pageTitle: "my stories"
}

const mapStateToProps = state => ({
    mainMenuActive: state.mainMenuActive,
    pageTitle: state.pageTitle,
    docTitle: state.docTitle
    // createPageTitle: state.createPageTitle
});

export default connect(mapStateToProps)(Dashboard);