import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {REACT_APP_API_BASE_URL} from '../config';
import {Link} from 'react-router-dom';
import TopBar from './top-bar';
import LandingStories from './landing-stories';
import {createPageTitle} from '../actions';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      loading: true,
    };
    this.loadStories = this.loadStories.bind(this);
  }

  loadStories() {
    fetch(`${REACT_APP_API_BASE_URL}/stories`, {
      method: 'GET',
    })
        .then((res) => {
          return res.json();
        })
        .then((stories) => {
          this.setState({
            stories,
            loading: false,
          });
        })
        .catch((err) =>
          this.setState({
            error: JSON.stringify(err),
          })
        );
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
        <div className="landing-container">
          <header className="masthead section section-dark shadow-static">
            <p className="tagline text-shadow-static-static row">unblock your brain <span className="blinking">|</span></p>
            <h1 className="app-name text-shadow-static-static row">inspiry</h1>
            <div className="row"><Link to="/writer" className="button btn-light shadow-static" role="button" >write a story</Link>
              <a href="#stories" className="button btn-light shadow-static" role="button">read for inspiration</a>
            </div>
            <div className="app-demo row">
              <p>Inspiry is a fun way to end writers block by free writing.</p>
              <p>Kill some time, get out of your head, and share your creations with friends and the world.</p>
              <div className="demo-creds">
                <h3>demo credentials</h3>
                <ul>
                  <li>username: demouser</li>
                  <li>password: dem0P@ss1</li>
                </ul>
              </div>
              <figure className="img-placeholder">
                <img src="/img/inspiry-screenshot.png" alt="Screenshot of the inspiry writer with a completed story" className="shadow-static" />
              </figure>
            </div>
          </header>
          <main>
            <div className="section">
              <h2 className="row">Have some fun and kick writers block to the curb</h2>
              <div className="row app-description">
                <p>Inspiry takes care of all the hard decisions so you can get on to the fun stuff.</p>
                <ol>
                  <li><div>Inspiry gives you a genre.</div></li>
                  <li><div>When it’s time to start writing, inspiry gives you a word that you have to include</div></li>
                  <li><div>When you least expect it, a random appears for you to incorporate into your tale.</div></li>
                </ol>
                <div className="app-description-text">
                  <p>Use that creative noggin of yours to organize the chaos into a coherent of a story (and if you get a good laugh out of it, that’s an added bonus!).</p>
                  <p>Remember, the idea is not to take things so seriously, so if your story isn’t up to par, scrap it and use the momentum to get back to work on your big idea.</p>
                  <p>And if it’s a masterpiece, publish it and share it with the world.</p>
                  <p>That idea isn’t going to write itself, so let’s get started!</p>
                </div>
              </div>
              <div className="row"><Link to="/writer" className="button btn-dark shadow-static" role="button" >start writing</Link>
              </div>
            </div>
            <div className="section section-dark shadow-static">
              <h2 className="row"><a name="stories">Stories</a></h2>
              <LandingStories stories={this.state.stories} />
              <div className="row"><Link to="/writer" className="button btn-light shadow-static" role="button" >start writing</Link>
              </div>
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
      </div >
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
