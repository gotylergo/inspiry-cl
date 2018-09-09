import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Story from './story';
import './my-stories.css';

class MyStories extends Component {
    render() {
        return (
            <div className="story-container">
                <div className="card shadow">
                    <ul className="card-toolbar">
                        <li><button className="card-button" aria-label="delete" title="delete"
                        ><FontAwesomeIcon icon="trash" /></button></li>
                        <li><button className="fa-share card-button" aria-label="share" title="share"
                        ><FontAwesomeIcon icon="share-square" /></button></li>
                        <li><button className="card-button" aria-label="close" title="close"
                        ><FontAwesomeIcon icon="times" /></button></li>
                    </ul>
                    <Story />
                </div>
                <div className="card shadow">
                    <div className="card-toolbar">
                        <button className="card-button" aria-label="delete" title="delete"
                        ><FontAwesomeIcon icon="trash" /></button>
                        <button className="fa-share card-button" aria-label="share" title="share"
                        ><FontAwesomeIcon icon="share-square" /></button>
                        <button className="card-button" aria-label="close" title="close"
                        ><FontAwesomeIcon icon="times" /></button>
                    </div>
                    <Story />
                </div>
            </div>
        )
    }
}

export default MyStories;
