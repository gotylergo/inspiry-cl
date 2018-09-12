import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TopBar from './top-bar';
import LandingStory from './landing-story';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <TopBar />
        <header className="masthead section section-dark">
          <p className="tagline text-shadow-static row">unblock your brain <span className="blinking">|</span></p>
          <h1 className="app-name text-shadow-static row">inspiry</h1>
          <div className="row"><Link to="/writer" className="button btn-light shadow" role="button" >write a story</Link>
            <Link to="/" className="button btn-light shadow" role="button">read for inspiration</Link>
          </div>
          <div className="app-demo row">
            <div className="img-placeholder">
              <picture>
                <source srcSet="" className="shadow" />
                <img src="" alt="Screenshot / video / gif" className="shadow" />
              </picture>
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
              <p>Remember, the idea is not to take things so seriously, so if your story isn’t up to par, scrap it and use the momentum to get back to work on your big idea. Or, i masterpiece, publish it and share it with the world!</p>
              <p>That idea isn't going to write itself, so let’s get started!</p>
            </div>
            <div class="row"><Link to="/writer" className="button btn-dark shadow" role="button" >start writing</Link>
            </div>
          </div>
          <div className="section section-dark">
            <h2 className="row">Stories</h2>
            <LandingStory />
            <LandingStory />
            <LandingStory />
            <LandingStory />
            <LandingStory />
            <LandingStory />
            <button className="button btn-light shadow">read for inspiration</button>
          </div>
        </main>
        <footer className="section section-light">
          <div className="row">
            <p>Hi, I'm Tyler, and I'm a web developer.</p>
            <a href="//github.com/gotylergo" className="button btn-dark shadow" role="button" onClick={
              e => {
                e.preventDefault();
                window.open("//github.com/gotylergo", "gotylergoGithub")
              }
            } >GitHub</a>
          </div>
        </footer>
      </div>
    )
  }
  componentDidMount() {
    this.props.createPageTitle("from landing.js");
  }
}

const mapStateToProps = state => ({
  mainMenuActive: state.mainMenuActive
})

export default connect(mapStateToProps)(Landing);