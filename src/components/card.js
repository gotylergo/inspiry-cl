import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StoryTitle, StoryBody } from './story';
import './card.css';

class Card extends Component {

  render() {
    console.log('card props', this.props);

    return (
      <div className="card shadow">
        <StoryTitle storyTitle={this.props.storyTitle} />
        <ul className="card-toolbar">
          <li className="card-delete">
            <button className="button card-button" aria-label="delete" title="delete"
            ><FontAwesomeIcon icon="trash" className="shadow-fa" /></button>
          </li>
          <li className="card-share">
            <button className="button card-button" aria-label="share" title="share"
            ><FontAwesomeIcon icon="share-square" className="shadow-fa" /></button>
          </li>
          <li className="card-close">
            <button className="button card-button" aria-label="close" title="close"
            ><FontAwesomeIcon icon="times" className="shadow-fa" /></button>
          </li>
        </ul>
        <StoryBody storyContent={this.props.storyContent} />
        <div className="story-fader"></div>
      </div>
    );
  }
}

export default Card;
