import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StoryTitle, StoryBody } from './story';
import './card.css';

class Card extends Component {

  render() {
    
    return (
      <div className="card shadow" id={`${this.props.storyID}`}>
        <StoryTitle storyTitle={this.props.storyTitle} />
        <ul className="card-toolbar">
          <li className="card-delete">
            <button className="button card-button" aria-label="delete" title="delete" id={`del-${this.props.storyID}`} onClick={(e) => this.props.deleteCard(e.currentTarget.id)}
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
