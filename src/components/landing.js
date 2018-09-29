import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { REACT_APP_API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';
import TopBar from './top-bar';
import LandingStories from './landing-stories';
import { createPageTitle } from '../actions';

class Landing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        stories: [],
        loading: true,
      }
      this.loadStories = this.loadStories.bind(this);
    }

  loadStories() {
    fetch(`${REACT_APP_API_BASE_URL}/stories`, {
      method: 'GET',
    })
      .then(res => {
        return res.json();
      })
      .then(stories => {
        this.setState({
          stories,
          loading: false,
        })
      })
      .catch(err =>
        this.setState({
          error: JSON.stringify(err),
        })
      )
  }


  componentDidMount() {
    this.props.createPageTitle('home');
    this.loadStories();
  }
  render() {
    document.title = this.props.docTitle;
    return (
      <div className="landing">
        <TopBar />
        <header className="masthead section section-dark shadow-static">
          <p className="tagline text-shadow-static-static row">unblock your brain <span className="blinking">|</span></p>
          <h1 className="app-name text-shadow-static-static row">inspiry</h1>
          <div className="row"><Link to="/writer" className="button btn-light shadow-static" role="button" >write a story</Link>
          <a href="#stories" className="button btn-light shadow-static" role="button">read for inspiration</a>
          </div>
          <div className="app-demo row">
            <figure className="img-placeholder">
              <img src="/img/inspiry-screenshot.png" alt="Screenshot of the inspiry writer with a completed story" className="shadow-static" />
            </figure>
            <div className="demo-creds">
              <h3>demo credentials</h3>
              <ul>
                <li>username: demouser</li>
                <li>password: dem0P@ss1</li>
              </ul>
            </div>
          </div>
        </header>
        <main>
          <div className="section">
            <h2 className="row">Have some fun and kick writers block to the curb</h2>
            <div className="row">
              <p>Get those disorganized thoughts out of your head and onto the page.</p>
              <p>When you start your story, Inspiry takes care of all the hard decisions so you can get on to the fun stuff. Before you start, you’re given a genre, along with a visual theme to set the mood.</p>
              <p>Then, it’s time to get creative. Before each sentence, Inspiry gives you a word that you have to include, and when you least expect it, we’ll also throw in a rando photo for you to incorporate into your tale.</p>
              <p>It’s your job to use that creative noggin of yours to organize the chaos into a coherent of a story (and if you get a good laugh out of it, that’s an added bonus!).</p>
              <p>Remember, the idea is not to take things so seriously, so if your story isn’t up to par, scrap it and use the momentum to get back to work on your big idea. Or, if it’s a masterpiece, publish it and share it with the world!</p>
              <p>That idea isn’t going to write itself, so let’s get started!</p>
            </div>
            <div className="row"><Link to="/writer" className="button btn-dark shadow-static" role="button" >start writing</Link>
            </div>
          </div>
          <div className="section section-dark shadow-static">
            <h2 className="row"><a name="stories">Stories</a></h2>
            <LandingStories stories={this.state.stories} />
          </div>
        </main>
        <footer className="section section-light">
          <div className="row">
            <p>Hi, I’m Tyler, and I’m a web developer.</p>
            <a href="//github.com/gotylergo" className="button btn-dark shadow-static" role="button" onClick={
              (e) => {
                e.preventDefault();
                window.open('//github.com/gotylergo', 'gotylergoGithub');
              }
            } >GitHub</a>
          </div>
        </footer>
      </div>
    );
  }
}

Landing.propTypes = {
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
)(Landing);
