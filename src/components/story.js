import React, {Component} from 'react';
import PropTypes from 'prop-types';
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
        <p>{this.props.storyContent}</p>
      </div>
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
};

export default Story;
