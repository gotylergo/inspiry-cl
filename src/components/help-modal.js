import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './modal.css';
import './help-modal.css';

class HelpModal extends Component {
    render() {
        return (
            <div class="help-modal shadow">
                <div class="close-button">
                        <FontAwesomeIcon role="button" className="button" icon="times" />
                </div>
                <h3>Unblock Your Brain</h3>
                <p>The best way to beat writer's block is to get out of your head and just start writing. Inspiry turns writing into a game by giving you a topic and forces you to get creative by throwing challenge words at you. Race the clock as you create a story, and inspire yourself while having some fun.</p>
                <ol class="toc">
                    <li><a href="#new-story">Start Your Story</a></li>
                    <li><a href="#share-your-work">Share Your Work</a></li>
                    <li><a href="#read-for-inspiration">Read for Inspiration</a></li>
                </ol>
                <a name="new-story"><h4>Start Your Story</h4></a>
                <ol>
                    <li>Click the + icon in the toolbar.</li>
                    <li>Inspiry generates a genre for your story.</li>
                    <li>When you're ready, click start.</li>
                    <li>Start your first sentence. Be sure to include "Word of the sentence."</li>
                    <li>Once you end your sentence, hit the Enter key to add it to your story, which will display below as you write.</li>
                    <li>Challenge: At some point in your story, Inspiry may insert a suprise image challenge. This image is part of your story, so be sure to somehow make it relevant as you write.</li>
                    <li>When the timer runs out, your story is complete. Save it to your journal or share it with the world.</li>
                </ol>

                <a name="share-your-work"><h4>Share Your Work</h4></a>
                <ol>
                    <li>...</li>
                </ol>
                <a name="read-for-inspiration"><h4>Read for Inspiration</h4></a>
                <ol>
                    <li>...</li>
                </ol>
                <h4>Are you ready?</h4>
                <button>Let's write!</button>
            </div>
        );
    }
}

export default HelpModal;