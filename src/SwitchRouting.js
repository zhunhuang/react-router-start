import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
              <Link to="/">Index</Link>
            </li>
            <li>
              <Link to="/about">about us</Link>
            </li>
            <li>
              <Link to="/users">user info</Link>
            </li>
            <li>
              <Link to="/switch">switch demo show</Link>
            </li>
          </ul>
          <Route path='/' component={Always}/>
          <Route exact path='/' component={Index}/>
          <Route path='/about' component={About}/>
          <Route path='/users' component={Users}/>
          <Route path='/switch' component={SwitchRouting}/>
        </div>
      </Router>
    );
  }
}

function SwitchRouting ({ match }) {
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/name`}>name</Link>
        </li>
        <li>
          <Link to={`${match.url}/age`}>age</Link>
        </li>
        <li>
          <Link to={`${match.url}/sex`}>sex</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:id`} component={Topic}/>
        <Route
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </Switch>
    </div>
  );
}

function Topic ({ match }) {
  console.log(match);
  return <h3> this topic id is {match.params.id}</h3>;
}

function Always () {
  return <h2>这个组件总会出现的</h2>;
}

export default App;
