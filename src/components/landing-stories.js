import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {IMG_DIR} from '../config';
import './landing-stories.css';

class LandingStories extends Component {
  render() {
    let Stories;
    if (this.props.loading) {
      Stories = <h3 className="loading-stories text-shadow-static">Loading stories...</h3>;
    } else if (this.props.stories.length > 0) {
      Stories =
        this.props.stories.map((story, index) =>
          <div className="landing-story" key={index}>
            <div className="story-img">
              <img src={`${IMG_DIR}/${story.img}`} alt={story.img} />
            </div>
            <h3>{story.title}</h3>
            <p>{story.content}</p>
            <h4>{story.user}</h4>
          </div>
        );
    } else {
      Stories = <h3 className="no-stories text-shadow-static">Couldn‘t find any stories. <Link to="/writer" >Write One?</Link></h3>;
    }

    return (
      <div className="story-container">
        {Stories}
      </div>
    );
  }
}

LandingStories.propTypes = {
  loading: PropTypes.bool,
  stories: PropTypes.array,
};

export default LandingStories;
