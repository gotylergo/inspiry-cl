import React, { Component } from 'react';
import './story.css';

class Story extends Component {
    state = {}
    render() {
        return (
            <div className="story">
                <h3 className="story-title">Story Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat maximus arcu malesuada scelerisque. Quisque dictum mattis ornare. Maecenas viverra massa tellus, et finibus mi laoreet id. Quisque rutrum nulla felis, vitae tempus massa congue a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi non dictum lorem, eu pharetra velit. Aliquam commodo sagittis lorem, ut condimentum libero. Ut ac velit dapibus, scelerisque neque eu, tincidunt lectus.</p>
                <p>Fusce interdum enim vel sem tincidunt, sed porta magna convallis. Ut egestas, tellus at posuere dapibus, massa velit vulputate massa, sed imperdiet leo mi a arcu. Sed blandit pharetra enim non ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In id blandit ante, eget lacinia mauris. Pellentesque tincidunt blandit felis sed dictum. Sed scelerisque ex mi, et venenatis mauris sagittis lacinia.</p>
            </div>
        );
    }
}

export default Story;