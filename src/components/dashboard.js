import React, { Component } from 'react';
import TopBar from './top-bar';
import MainMenu from './main-menu';
import MyStories from './my-stories';
import './dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <TopBar />
                <MyStories />
                <MainMenu />
            </div>
        );
    }
}

export default Dashboard;