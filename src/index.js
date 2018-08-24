import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/app';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
    google: {
        families: ['Pacifico', 'Comfortaa']
    }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
