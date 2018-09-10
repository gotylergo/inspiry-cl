import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopBar from './top-bar';
import './writer.css';

class Writer extends Component {
    render() {
        return (
            <div className="writer">
                <TopBar />
                <main className="writer-main">
                    <div className="writer-container">
                        <div className="story-header text-shadow-static">
                            <span className="timer">
                                60 <FontAwesomeIcon icon="stopwatch" />
                            </span>
                            <h1 className="text-shadow-static">my <span>'{'horror'}'</span> story</h1>
                            <div className="target-word shadow">salamander</div>
                            <div className="target-word-label text-shadow-static">word of the sentence:</div>
                            <textarea className="story-input shadow" placeholder="Start writing here"></textarea>
                        </div>
                        <p className="story">Curabitur facilisis leo at venenatis fringilla. In ullamcorper sagittis dui, mattis imperdiet metus commodoeget. Nulla nec erat nec placerat vestibulum. Curabitur sed dapibus Pellentesque vestibulummattis semper. Duis ultricies p metus in vestibulum. <img src="" alt="Random" /> Etiam iaculis, lacus in eleifend, antepurus sagittis magna, vitae tincidunt felis orci a eros. Integer sollicitudin ipsum et malesuada fringilla. Sed consequat, mi at euismod lacinia, magna metus pul tortor, quis semper nisi turpis quis lacus. Aeneanorci ipsum, maximus sit amet ornare eget, fermentum eu  Phasellus dui nisi, ornare a fringilla ac, ornarefringilla magna.</p>
                    </div>
                </main>
                <ul className="writer-footer">
                    <li><button className="button btn-light">Save</button></li>
                    <li><button className="button btn-light">Share</button></li>
                </ul>
            </div >
        )
    }
}

export default Writer;