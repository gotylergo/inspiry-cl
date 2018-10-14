import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {REACT_APP_API_BASE_URL, IMG_DIR} from '../config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import TopBar from './top-bar';
import {createPageTitle, toggleModal} from '../actions';
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
    this.setSetnence = this.setSentence.bind(this);
    this.timerObj = undefined;
    this.state = {
      writing: false,
      complete: false,
      saved: false,
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

  startWriting() {
    this.setState({
      writing: true,
      complete: false,
      startTime: 5,
      endTime: 0,
      genre: Genres.array[Math.floor(Math.random() * (Genres.array.length))],
      keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
      img: Imgs.array[Math.floor(Math.random() * (Imgs.array.length - 1))],
      imgActive: false,
      imgActiveTime: (Math.floor(Math.random() * 45 + 45)),
      currentSentence: '',
      story: '',
    });

    this.timer();
  }

  // Timer
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
        complete: true,
      });
    }
  }

  setSentence = (e) => {
    e.preventDefault();
    this.setState({currentSentence: e.target.value});
  }

  // Watch for ending punctuation or Enter and saveSentence
  keySaveSentence = (e) => {
    this.setState({currentSentence: e.currentTarget.value});
    if ((e.key === 'Enter' || e.key === '.' || e.key === '?' || e.key === '!')) {
      this.saveSentence(e);
    }
  }

  saveSentence = (e) => {
    e.preventDefault(e);
    // Display the image at a random time after a sentence is saved
    if (this.state.imgActiveTime >= this.state.startTime) {
      this.setState({
        imgActive: true,
      });
    }

    // Set the ending punctuation
    let sent = this.state.currentSentence;
    let sentLastChar = sent.slice(-1);
    let endChar;
    if (e.key === 'Enter') {
      endChar = '.';
    } else if (e.key === undefined) {
    // Fix Chrome mobile keypress behavior
      if (sentLastChar === '!' || sentLastChar === '?' || sentLastChar === '.') {
        endChar = '';
      } else {
        endChar = '.';
      }
    } else {
      endChar = e.key;
    }
    // Don't save an empty sentence
    if (sent === '') {
      return '';
    };

    // Add a . and save the sentence if this is the first sentence
    // Add some time to the timer as a reward
    if (this.state.story === '') {
      this.setState({
        currentSentence: '',
        story: `${sent}${endChar}`,
        keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
        startTime: this.state.startTime + Math.floor(Math.random() * 4 + 3),
      });
    }
    // Add a . and a space when adding consecutive sentences
    // Add some time to the timer as a reward
    this.setState({
      currentSentence: '',
      story: `${this.state.story} ${sent}${endChar}`,
      keyword: Keywords.array[Math.floor(Math.random() * (Keywords.array.length))],
      startTime: this.state.startTime + Math.floor(Math.random() * 3 + 1),
    });
  }

  saveStory = (e) => {
    e.preventDefault();
    const myToken = sessionStorage.getItem('token');
    let storyData = JSON.stringify({
      content: this.state.story,
      title: `my ${this.state.genre} story`,
      img: this.state.img.file,
      genre: this.state.genre,
    });
    if (myToken) {
      fetch(`${REACT_APP_API_BASE_URL}/stories/`,
          {
            method: 'POST',
            body: storyData,
            headers: {'Authorization': `Bearer ${myToken}`, 'Content-Type': 'application/json'},
          })
          .then((res) => {
            if (!res.ok) {
              return Promise.reject(res);
            }
            return res.json();
          })
          .then(() => {
            this.setState({
              saved: true,
            });
          })
          .then(() => {
            this.props.history.replace('/dashboard');
          })
          .catch((err) => {
            console.error(err);
            this.setState({
              error: JSON.stringify(err),
            });
          });
    } else {
      this.props.toggleModal('auth');
    }
  }

  componentDidMount() {
    this.props.createPageTitle('writer');
  }

  render() {
    document.title = this.props.docTitle;

    const StoryAction = (!this.state.complete) ?
      <div className="story-action-container">
        <input type="text" id="story-input"
          className="story-input shadow"
          placeholder="Write here. Hit Enter or . when done." onKeyPress={(e) => this.keySaveSentence(e)} onChange={(e) => this.setSentence(e)} value={this.state.currentSentence}
        />
        <button className="enter-button" onClick={(e) => this.saveSentence(e)} >
          <FontAwesomeIcon icon="chevron-circle-down" className="shadow-fa-light" />
        </button>
      </div> : (!this.state.saved) ?
        <div className="story-action-container">
          <div>
            <h3>What a story!</h3>
            <p>Use the bottom toolbar to share or save it!</p>
          </div>
        </div> : <div className="story-action-container">
          <div>
            <h3>Story saved!</h3>
            <p>Head to your <Link to="/dashboard">dashboard</Link> to view it.</p>
          </div>
        </div>;

    const StoryImg = () => {
      if (this.state.imgActive) {
        return (
          <figure className="shadow-static">
            <img
              src={`${IMG_DIR}/${this.state.img.file}`}
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

    const WriterFooter = (this.state.complete) ?
      <footer>
        <ul className="writer-footer">
          <li><button className="button btn-light" onClick={(e) => this.saveStory(e)} >Save</button></li>
        </ul>
      </footer> : '';

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
          {StoryAction}
        </div>
        <article className="story">
          <StoryImg />
          <div>{this.state.story}</div>
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
          {WriterFooter}
        </main>
      </div >
    );
  }
}

Writer.propTypes = {
  docTitle: PropTypes.string,
  createPageTitle: PropTypes.func,
  toggleModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  mainMenuActive: state.mainMenuActive,
  pageTitle: state.pageTitle,
  docTitle: state.docTitle,
});

const mapDispatchToProps = (dispatch) => ({
  createPageTitle: (title) => dispatch(createPageTitle(title)),
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Writer);
