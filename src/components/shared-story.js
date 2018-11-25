import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {REACT_APP_API_BASE_URL} from '../config';
import {connect} from 'react-redux';
import {createPageTitle, toggleModal} from '../actions';
import TopBar from './top-bar';
import Card from './card';
import './my-stories.css';
import './shared-story.css';

class SharedStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: '',
    };
  }
  loadStory() {
    fetch(`${REACT_APP_API_BASE_URL}/stories/id/${this.props.match.params.storyID}`, {
      method: 'GET',
    })
        .then((res) => {
          return res.json();
        })
        .then((story) => {
          this.setState({
            story,
            loading: false,
          });
        })
        .then((res) => {
          return console.log(this.state);
        })
        .catch((err) =>
          this.setState({
            error: JSON.stringify(err),
          })
        );
  }
  render() {
    let Story;
    if (this.state.loading) {
      Story = <h3 className="loading-stories text-shadow-static">Loading story...</h3>;
    } else if (this.state.story.length !== '') {
      Story = (
        <Card storyID={this.state.story._id} storyContent={this.state.story.content} storyTitle={this.state.story.title} storyImage={`${this.state.story.img}`} genre={this.state.story.genre} deleteCard={this.deleteCard} toggleModal={this.props.toggleModal} />
      );
    } else {
      Story = <h3 className="no-stories text-shadow-static">Hmm... couldn‘t find that story. <Link to="/writer" >Write One?</Link></h3>;
    }

    return (
      <main className="card-container shared-story">
        <TopBar />
        {Story}
      </main>
    );
  }
  componentDidMount() {
    this.props.createPageTitle('inspiry');
    this.loadStory();
  }
}

SharedStory.propTypes = {
  docTitle: PropTypes.string,
  createPageTitle: PropTypes.func,
  loadStory: PropTypes.func,
  toggleModal: PropTypes.func,
  loading: PropTypes.bool,
  stories: PropTypes.array,
  storyURL: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      storyID: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  mainMenuActive: state.mainMenuActive,
  pageTitle: state.pageTitle,
  docTitle: state.docTitle,
  myStories: state.myStories,
  userAuthed: state.userAuthed,
});

const mapDispatchToProps = (dispatch) => ({
  createPageTitle: (title) => dispatch(createPageTitle(title)),
  toggleModal: (modal, shareID) => dispatch(toggleModal(modal, shareID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SharedStory);
