import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {StoryTitle, StoryBody} from './story';
import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card shadow">
        <StoryTitle />
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
        <StoryBody />
        <div className="story-fader"></div>
      </div>
    );
  }
}

export default Card;
