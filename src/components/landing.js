import React, { Component } from 'react';
import TopBar from './top-bar';
import LandingStories from './landing-stories';

class Landing extends Component {
  render() {
    return (
      <div class="landing">
        <TopBar />
        <div>
          <header className="masthead section section-dark">
            <p className="tagline">unblock your brain <span className="blinking">|</span></p>
            <h1 className="app-name">inspiry</h1>
            <button className="btn-light">write a story</button>
            <button className="btn-light">read for inspiration</button>
            <div className="app-demo">
              <picture>
                <source srcSet="" />
                <img src="" alt="Screenshot / video / gif" />
              </picture>
            </div>
          </header>
          <main>
            <div className="section">
              <h2>Have some fun and kick writers block to the curb</h2>
              <p>Get those disorganized thoughts out of your head and onto the page.</p>
              <p>When you start your story, Inspiry takes care of all the hard decisions so you can get on to the fun stuff. Before you start, you’re given a genre, along with a visual theme to set the mood.</p>
              <p>Then, it’s time to get creative. Before each sentence, Inspiry gives you a word that you have to include, and when you least expect it, we’ll also throw in a rando photo for you to incorporate into your tale.</p>
              <p>It’s your job to use that creative noggin of yours to organize the chaos into a coherent of a story (and if you get a good laugh out of it, that’s an added bonus!).</p>
              <p>Remember, the idea is not to take things so seriously, so if your story isn’t up to par, scrap it and use the momentum to get back to work on your big idea. Or, i masterpiece, publish it and share it with the world!</p>
              <p>That idea isn't going to write itself, so let’s get started!</p>
              <button className="btn-dark">start writing</button>
            </div>
            <LandingStories />
          </main>
          <footer className="section section-light">
            <p>App by Tyler</p>
            <button className="btn-dark">GitHub</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default Landing;