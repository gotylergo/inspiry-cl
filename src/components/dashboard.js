import React, { Component } from 'react';
import TopBar from './top-bar';
import MyStories from './my-stories';
// import HelpModal from './help-modal';

class Stories extends Component {

    render() {

        return (
            <div>
                <TopBar />
                <MyStories />
                {/* <HelpModal /> */}
            </div>
        )
    }
}

export default Stories;