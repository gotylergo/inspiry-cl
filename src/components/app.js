import React, { Component } from 'react';
import {
  BrowserRouter as
    Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faStopwatch,
  faBook, faTimes,
  faTrash,
  faShareSquare,
  faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';
import Landing from './landing';
import Writer from './writer';

import Dashboard from './dashboard';
import './app.css';
import './landing.css';

library.add(
  faBars, 
  faStopwatch, 
  faBook, 
  faTimes, 
  faTrash, 
  faShareSquare,
  faChevronCircleDown
  );

export class App extends Component {
  render() {
    const NoMatch = ({ location }) => (
      <div>
        <div className="page404 shadow-static">
          <h3>Uh oh... something went wrong. <span role="img" aria-label="Cheeky monkey covering eyes">🙈</span></h3>
          <p>Couldn’t find <code>{location.pathname}</code>.</p>
          <p>Here’s the landing page instead.</p>
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
