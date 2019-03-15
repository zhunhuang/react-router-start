import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';

import './App.css';

function Index () {
  return <h2>welcome home</h2>;
}

function About () {
  return <h2>About us</h2>;
}

function Users () {
  return <h2>Users Page</h2>;
}

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/about" activeClassName='hurray'>About us</NavLink>
            </li>
            <li>
              <NavLink to="/index" activeClassName='hurray'>Index</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName='hurray'>User info</NavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/about' component={About}/>
            <Route path='/users' component={Users}/>
            <Route exact path='/index' component={Index}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
