import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {REACT_APP_API_BASE_URL} from '../config';
import Card from './card';
import './my-stories.css';

class MyStories extends Component {
  deleteCard = (id) => {
    const _id = id.slice(4);
    const myToken = sessionStorage.getItem('token');
    fetch(`${REACT_APP_API_BASE_URL}/stories/id/${_id}`, {
      method: 'DELETE',
      headers: {'authorization': `Bearer ${myToken}`},
    })
        .then((res) => {
          if (res.status !== 204) {
            return res.json();
          }
          console.log(`${_id} deleted!`);
          return this.props.loadStories();
        })
        .catch((err) =>
          this.setState({
            error: JSON.stringify(err.message),
          })
        );
  }

  render() {
    let Stories;
    if (this.props.loading) {
      Stories = <h3 className="loading-stories text-shadow-static">Loading stories...</h3>;
    } else if (this.props.stories.length > 0) {
      Stories =
        this.props.stories.map((story, index) =>
          <Card key={index} storyID={story._id} storyContent={story.content} storyTitle={story.title} storyImg={story.img} genre={story.genre} deleteCard={this.deleteCard} />
        );
    } else {
      Stories = <h3 className="no-stories text-shadow-static">Couldn‘t find any stories. <Link to="/writer" >Write One?</Link></h3>;
    }

    return (
      <div className="card-container">
        {Stories}
      </div>
    );
  }
}

MyStories.propTypes = {
  docTitle: PropTypes.string,
  createPageTitle: PropTypes.func,
  loadStories: PropTypes.func,
  loading: PropTypes.string,
  stories: PropTypes.array,

};

export default MyStories;
