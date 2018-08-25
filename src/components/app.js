import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import Menu from './menu';
import Landing from './landing';
import Writer from './writer';
import Auth from './auth-modal';

import './app.css';

library.add(faBars, faStopwatch);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Menu} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/writer" component={Writer} />
          <Route exact path="/auth" component={Auth} />
        </div>
      </Router>

    );
  }
}

export default App;
