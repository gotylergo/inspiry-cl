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
    this.startWriting = this.startWriting.bind(this);
    this.saveSentence = this.saveSentence.bind(this);
    this.timerObj = undefined;
    this.state = {
      writing: false,
      storyComplete: false,
      startTime: 120,
      endTime: 0,
      genre: 'awesome',
      keyword: 'inpsired',
      img: '',
      imgActive: false,
      imgActiveTime: 60,
      currentSentence: '',
      story: '',
    };
  }
  // Timer
  // Periodically add picture
  // Periodically

  // Genre

  // Saving current sentence to the story (Local State)

  // Load JSON

  startWriting() {
    this.setState({
      writing: true,
      startTime: 120,
      endTime: 0,
      storyComplete: false,
      genre: Genres.array[Math.floor(Math.random() * (Genres.array.length))],
      keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
      img: Imgs.array[Math.floor(Math.random() * (Imgs.array.length - 1))],
      imgActive: false,
      imgActiveTime: (Math.floor(Math.random() * 80 + 40)),
      currentSentence: '',
      story: ''
    });
    // this.setState({
    //   story: 'Write the first sentence of your story in the box above and hit Enter. Don’t forget to include the word of the sentence!',
    // });
    this.timer();
  }

  timer() {
    this.timerObj = setInterval(this.intervalHandler, 1000);
  }

  intervalHandler() {
    this.setState({
      startTime: this.state.startTime - 1,
    });
    if (this.state.startTime <= this.state.endTime) {
      clearInterval(this.timerObj);
      this.setState({
        storyComplete: true,
      })
    }
  }

  componentWillMount() {
    // console.log(Genres);
    // this.setState({
    //   genre: Genres.array[Math.floor(Math.random() * (Genres.array.length))],
    //   keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
    //   img: Imgs.array[Math.floor(Math.random() * (Imgs.array.length - 1))],
    // });
  }

  setSentence = (e) => {
    e.preventDefault();
    this.setState({ currentSentence: e.target.value })
  }

  keySaveSentence = (e) => {
    this.setState({ currentSentence: e.currentTarget.value });
    if ((e.key === 'Enter' || e.key === '.' || e.key === '?' || e.key === '!')) {
      console.log('submit activated');
      this.saveSentence(e);
    }
  }

  saveSentence = (e) => {
    e.preventDefault(e);
    console.log(e.key);
    // Display the image at a random time after a sentence is saved
    if (this.state.imgActiveTime >= this.state.startTime) {
      this.setState({
        imgActive: true,
      })
    }
    let sent = this.state.currentSentence;
    let sentNoEndChar = sent.slice(0, -1);
    let endChar;
    if (e.key === 'Enter') {
      endChar = '.';
    } else {
      endChar = e.key;
    }
    // Don't save an empty sentence
    if (sent === "") {
      return ""
    };
    console.log('sent', sent);
    console.log('endChar', endChar)

    // Set the ending punctuation

    // Add a . and save the sentence if the story is empty
    // Add some time to the timer as a reward
    if (this.state.story === "") {
      this.setState({
        currentSentence: "",
        story: `${sent}${endChar}`,
        keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
        startTime: this.state.startTime + Math.floor(Math.random(3) * 3)
      });
    }
    // Add a . and a space when adding consecutive sentences
    // Add some time to the timer as a reward
    this.setState({
      currentSentence: "",
      story: `${this.state.story} ${sent}${endChar}`,
      keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
      startTime: this.state.startTime + Math.floor(Math.random() * 3),
    });
  }

  componentDidMount() {
    this.props.createPageTitle('writer');

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

    const WriterMain = (this.state.writing) ?
      <div className="writer-container">
        <div className="story-header text-shadow-static">
          <div className="timer">
            {this.state.startTime} <FontAwesomeIcon icon="stopwatch" />
          </div>
          <h1 className="text-shadow-static">my <span className="story-genre">{this.state.genre}</span> story</h1>
          <div className="keyword shadow">{this.state.keyword}</div>
          <div className="keyword-label text-shadow-static">
            word of the sentence:</div>
          <div className="story-input-container">
            <input type="text" id="story-input"
              className="story-input shadow"
              placeholder="Write here. Hit Enter or . when done." onKeyPress={e => this.keySaveSentence(e)} onChange={e => this.setSentence(e)} value={this.state.currentSentence}
            />
            <button className="enter-button" onClick={(e) => this.saveSentence(e)} >
              <FontAwesomeIcon icon="chevron-circle-down" className="shadow-fa-light" />
            </button>
          </div>
        </div>
        <article className="story">
          {this.state.story}
          <StoryImg />
        </article>
      </div> :
      <div className="writer-starter">
        <div>
          <button className="button btn-light shadow" onClick={() => this.startWriting()}>start your story</button>
        </div>
      </div>;

    return (
      <div className="writer" >
        <TopBar />
        <main className="writer-main">
          {WriterMain}
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
