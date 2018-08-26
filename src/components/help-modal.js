import React, { Component } from 'react';

class HelpModal extends Component {
    render() {
        return (
            <div class="modal help-modal hide-me">
                <div class="close-button">
                    <a href="#" class="button">
                        <FontAwesomeIcon icon="times-circle" />
                    </a>
                </div>
                <h3>Start your destination diary</h3>
                <h4>Create destinations</h4>
                <ol>
                    <li>Click on the gray card to start a new destination.</li>
                    <li>Type a title for your destination. Example: Hawaii</li>
                    <li>Type in the activities you want to do there. Example: Go surfing!</li>
                    <li>Press enter to add more activities.</li>
                    <li>Tap the X next to an activity to delete it.</li>
                    <li>When you're finished, click save!</li>
                </ol>
                <h4>Share your journey</h4>
                <p>When you visit and complete a destination, open it and press the complete button to upload photos of the activities
you completed there. Share your adventure with the world!</p>
                <h4>Are you ready?</h4>
                <button>Let's go!</button>
            </div>
        );
    }
}

export default HelpModal;