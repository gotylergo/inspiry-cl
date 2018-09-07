import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faStopwatch, faBook, faTimes, faTrash, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import Landing from './landing';
import Writer from './writer';
// import Auth from './auth-modal';

import Dashboard from './dashboard';
import './app.css';
import './landing.css';

library.add(faBars, faStopwatch, faBook, faTimes, faTrash, faShareSquare);

class App extends Component {
  render() {

    const NoMatch = ({ location }) => (
      <div>
        <div class="page404">
          <h3>Hmm... something went wrong at <code>{location.pathname}</code></h3>
          <p>Here's the landing page instead.</p>
        </div>
        <Landing />
      </div>
    );

    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/writer" component={Writer} />
          <Redirect exact from="/home" to="/dashboard" />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
