import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faStopwatch, faBook, faTimes, faTrash, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import Landing from './landing';
import Writer from './writer';
import { connect } from 'react-redux';

import Dashboard from './dashboard';
import './app.css';
import './landing.css';

library.add(faBars, faStopwatch, faBook, faTimes, faTrash, faShareSquare);

class App extends Component {
//   constructor(props) {
//     super(props);
//     document.title = this.props.docTitle;
//   }

  render() {

    const NoMatch = ({ location }) => (
      <div>
        <div class="page404 shadow-static">
          <h3>Uh oh... something went wrong. <span role="img" aria-label="Monkey Covering Eyes">🙈</span></h3>
          <p>Couldn't find <code>{location.pathname}</code>.</p>
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

const mapStateToProps = state => ({
  mainMenuActive: state.mainMenuActive,
  appTitle: state.appTitle,
  pageTitle: state.pageTitle,
  docTitle: state.docTitle
});

export default connect(mapStateToProps)(App);