import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IMG_DIR } from '../config';
import './story.css';

export class StoryTitle extends Component {
  render() {
    return (
      <h3 className="story-title">{this.props.storyTitle}</h3>
    );
  }
}

export class StoryBody extends Component {
  render() {
    return (
      <div className="story-body">
        <figure className="story-image">
          <img src={`${IMG_DIR}/${this.props.storyImage}`} alt={this.props.storyImage} />
        </figure>
        <p>{this.props.storyContent}</p>
      </div>
    );
  }
}

export class StoryImage extends Component {
  render() {
    return (
      <figure className="story-image">
        <img src={`${IMG_DIR}/${this.props.storyImage}`} alt={this.props.storyImage} />
      </figure>
    );
  }
}

class Story extends Component {
  state = {}
  render() {
    return (
      <div className="story">
        <StoryTitle />
        <StoryBody />
      </div>
    );
  }
}

StoryTitle.propTypes = {
  storyTitle: PropTypes.string,
};

StoryBody.propTypes = {
  storyContent: PropTypes.string,
  storyImage: PropTypes.string,
};

StoryImage.propTypes = {
}

export default Story;
