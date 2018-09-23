import React, { Component } from 'react';
import Card from './card';
import './my-stories.css';

class MyStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: []
    }
  }

  render() {
    const Stories =
      this.props.stories.map((story, index) =>
        <Card key={index} storyContent={story.content} storyTitle={story.title} storyImg={story.img} genre={story.genre} />
      );

    return (
      <div className="card-container">
        {Stories}
      </div>
    );
  }
}

export default MyStories;
