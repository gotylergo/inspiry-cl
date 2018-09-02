import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Story from './story';
import './my-stories.css';

class MyStories extends Component {
    render() {
        return (
            <div className="story-container">
                <div className="card shadow">
                    <div className="card-toolbar">
                        <FontAwesomeIcon icon="trash" role="button" aria-label="Delete" title="Delete" className="card-button fa-fw" />
                        <FontAwesomeIcon icon="share-square" role="button" aria-label="Share" title="Share" className="fa-share card-button fa-fw" />
                        <FontAwesomeIcon icon="times" role="button" aria-label="Close" title="Close" className="card-button fa-fw" />
                    </div>
                    <Story />
                </div>
                <div className="card shadow">
                    <div className="card-toolbar">
                        <FontAwesomeIcon icon="trash" role="button" aria-label="Delete" title="Delete" className="card-button fa-fw" />
                        <FontAwesomeIcon icon="share-square" role="button" aria-label="Share" title="Share" className="fa-share card-button fa-fw" />
                        <FontAwesomeIcon icon="times" role="button" aria-label="Close" title="Close" className="card-button fa-fw" />
                    </div>
                    <Story />
                </div>
            </div>
        )
    }
}

export default MyStories;