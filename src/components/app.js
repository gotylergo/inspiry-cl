import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faStopwatch, faBook, } from '@fortawesome/free-solid-svg-icons';
import Landing from './landing';
import Writer from './writer';
import Auth from './auth-modal';

import Dashboard from './dashboard';
import './app.css';
import './landing.css';

library.add(faBars, faStopwatch, faBook);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/writer" component={Writer} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/home" component={Dashboard} />
        </div>
      </Router>

    );
  }
}

export default App;
