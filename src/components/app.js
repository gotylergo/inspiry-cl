import React, {Component} from 'react';
import {
  BrowserRouter as
  Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faStopwatch,
  faBook, faTimes,
  faTrash,
  faShareSquare,
  faChevronCircleDown,
  faHome,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import Landing from './landing';
import Writer from './writer';
import Dashboard from './dashboard';
import SharedStory from './shared-story';
import './app.css';
import './landing.css';

library.add(
    faBars,
    faStopwatch,
    faBook,
    faTimes,
    faTrash,
    faShareSquare,
    faChevronCircleDown,
    faHome,
    faQuestionCircle
);

export class App extends Component {
  render() {
    const NoMatch = ({location}) => (
      <div>
        <div className="page404 shadow-static">
          <h3>Uh oh... something went wrong.
            <span role="img" aria-label="Cheeky monkey covering eyes">🙈</span>
          </h3>
          <p>Couldn’t find <code>{location.pathname}</code>.</p>
          <p>Here’s the landing page instead.</p>
        </div>
        <Landing />
      </div>
    );

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/writer" element={<Writer/>} />
          <Navigate from="/home" to="/dashboard" />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/id/:storyID" render={(props) => (<SharedStory {...props} />)} />
          <Route element={<NoMatch/>} />
        </Routes>
      </Router>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }),
};

App.defaultProps = {
  location: {
    pathname: '',
  },
};

export default App;
