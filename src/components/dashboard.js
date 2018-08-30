import React, { Component } from 'react';
import TopBar from './top-bar';
import MainMenu from './main-menu';
import MyStories from './my-stories';
// import HelpModal from './help-modal';

class Stories extends Component {

    render() {
        return (
            <div>
                <TopBar />
                <MainMenu />
                <MyStories />
                {/* <HelpModal /> */}
            </div>
        )
    }
}

export default Stories;