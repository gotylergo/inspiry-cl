import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopBar from './top-bar';
import { createPageTitle } from '../actions';
import Genres from './json/genres.json';
import Imgs from './json/images.json';
import Keywords from './json/keywords.json';
import './writer.css';

class Writer extends Component {
  constructor(props) {
    super(props);
    this.intervalHandler = this.intervalHandler.bind(this);
    this.timerObj = undefined;
    this.state = {
      startTime: 60,
      endTime: 0,
      genre: '',
      keyword: '',
      img: '',
      imgActive: false,
      currentSentence: '',
      story: 'This is a story.',
    };
  }
  // Timer
  // Periodically add picture
  // Periodically

  // Genre

  // Saving current sentence to the story (Local State)

  // Load JSON

  timer() {
    this.timerObj = setInterval(this.intervalHandler, 1000);
  }

  intervalHandler() {
    this.setState({
      startTime: this.state.startTime - 1,
    });
    if (this.state.startTime <= this.state.endTime) {
      clearInterval(this.timerObj);
    }
  }

  componentWillMount() {
    console.log(Genres);
    this.setState({
      genre: Genres.array[Math.floor(Math.random() * (Genres.array.length))],
      keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
      img: Imgs.array[Math.floor(Math.random() * (Imgs.array.length - 1))],
    });
  }

  componentDidMount() {
    this.props.createPageTitle('writer');
    this.timer();
  }

  render() {
    document.title = this.props.docTitle;
    const StoryImg = () => {
      if (this.state.imgActive) {
        return (
          <figure className="shadow-static">
            <img
              src={`./img/story/${this.state.img.file}`}
              title={this.state.img.title}
              alt={this.state.img.description}
            />
            <figcaption>
              <a
                href={this.state.img.from}
                target="_blank"
                rel="noopener noreferrer"
              >“{this.state.img.title}”</a>
            </figcaption>
          </figure>
        );
      }
      return '';
    };
    return (
      <div className="writer">
        <TopBar />
        <main className="writer-main">
          <div className="writer-container">
            <div className="story-header text-shadow-static">
              <div className="timer">
                {this.state.startTime} <FontAwesomeIcon icon="stopwatch" />
              </div>
              <h1 className="text-shadow-static">
                my <span className="story-genre">{this.state.genre}</span> story
              </h1>
              <div className="keyword shadow">{this.state.keyword}</div>
              <div className="keyword-label text-shadow-static">
                word of the sentence:
              </div>
              <textarea
                className="story-input shadow"
                placeholder="Start writing here"
              ></textarea>
            </div>
            <article className="story">
              {this.state.story}
              <StoryImg />
            </article>
          </div>
        </main>
        <ul className="writer-footer">
          <li><button className="button btn-light">Save</button></li>
          <li><button className="button btn-light">Share</button></li>
        </ul>
      </div >
    );
  }
}

Writer.propTypes = {
  docTitle: PropTypes.string,
  createPageTitle: PropTypes.func,
};

const mapStateToProps = (state) => ({
  mainMenuActive: state.mainMenuActive,
  pageTitle: state.pageTitle,
  docTitle: state.docTitle,
});

const mapDispatchToProps = (dispatch) => ({
  createPageTitle: (title) => dispatch(createPageTitle(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writer);
