import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    let Stories;
    if (this.props.loading) {
      Stories = <h3 className="loading-stories text-shadow-static">Loading stories...</h3>
    }
    else if (this.props.stories.length === 0) {
      Stories = <h3 className="no-stories text-shadow-static">Couldn't find any stories. <Link to="/writer" >Write One?</Link></h3>;
    } else {
      Stories =
        this.props.stories.map((story, index) =>
          <Card key={index} storyContent={story.content} storyTitle={story.title} storyImg={story.img} genre={story.genre} />
        );
    }

    return (
      <div className="card-container">
        {Stories}
      </div>
    );
  }
}

export default MyStories;
