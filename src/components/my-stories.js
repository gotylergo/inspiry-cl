import React, { Component } from 'react';
import Card from './card';
import './my-stories.css';

class MyStories extends Component {
    render() {
        return (
            <div className="card-container">
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}

export default MyStories;
