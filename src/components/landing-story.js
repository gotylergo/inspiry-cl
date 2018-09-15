import React, {Component} from 'react';
import './landing-story.css';

class LandingStory extends Component {
  render() {
    return (
      <div className="landing-story">
        <div className="avatar">
          <picture>
            <source sourceset="" />
            <img src="" alt="User.img" />
          </picture>
        </div>
        <h3>John Smith</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem</p>
      </div>
    );
  }
}

export default LandingStory;
