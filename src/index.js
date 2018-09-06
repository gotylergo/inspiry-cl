import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';
import App from './components/app';
import Store from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

WebFont.load({
    google: {
        families: ['Pacifico', 'Comfortaa', 'Georgia']
    }
})

ReactDOM.render(<Provider store={Store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
