import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './modal.css';
import './help-modal.css';

class HelpModal extends Component {
  render() {
    return (
      <div className="help-modal">
        <h3>Unblock Your Brain</h3>
        <p>The best way to beat writer’s block is to get out of your head and just start writing. Inspiry turns writing into a game by giving you a topic and forcing you to get creative by throwing challenges at you. Race the clock as you create a story, and inspire yourself while having some fun.</p>
        <ol className="toc">
          <li><a href="#new-story">Start Your Story</a></li>
          <li><a href="#save-your-story">Save Your Story</a></li>
          <li><a href="#review-your-anthology">Review Your Anthology</a></li>
          <li><a href="#share-your-work">Share Your Work</a></li>
        </ol>
        <a name="new-story"><h4>Start Your Story</h4></a>
        <ol>
          <li>Click the new story button in the <FontAwesomeIcon icon="bars" /> menu.</li>
          <li>Click Start.</li>
          <li>Inspiry generates a genre for your story.</li>
          <li>Start your first sentence. Be sure to include the “Word of the sentence.”</li>
          <li>When you finish your sentence (by typing “.”, “?”, “!”, hitting Enter, or clicking the button) it will be added to you story below.</li>
          <li>Challenge: At some point in your story, inspiry will insert a suprise image challenge. This image is part of your story, so be sure to somehow make it relevant as you write. Get creative!</li>
          <li>When the timer runs out, your story is complete. Save it to your dashboard or scrap it and start over.</li>
        </ol>
        <a name="save-your-story"><h4>Save Your Story</h4></a>
        <p>If you love your creation, don‘t lose it! Log in, then click save to add it to your dashboard and start your own anthology.</p>
        <a name="review-your-anthology"><h4>Review Your Anthology</h4></a>
        <ol>
          <li>Open up the dashboard to view your saved works. You can read them, share them, or delete them using the buttons on each story card.</li>
        </ol>
        <a name="share-your-work"><h4>Share Your Work</h4></a>
        <p>Writing is more fun with friends! Wrote a beautiful tragedy? Think your nonsense story is hilarious? Use the share button on your dashboard to share a link with your friends.</p>
        <h4>Are you ready?</h4>
        <Link to="/writer" className="button shadow" role="button" onClick={this.props.toggleModal} >Let’s write!</Link>
      </div>
    );
  }
}

HelpModal.propTypes = {
  toggleModal: PropTypes.func,
};

export default HelpModal;
