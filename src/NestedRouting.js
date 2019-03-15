import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact path='/' component={Index}/>
        <Route path='/about' component={About}/>
        <Route path='/topics' component={Topics}/>
      </div>
    </Router>
  );
}

function Index () {
  return <h2> Index</h2>;
}

function About () {
  return <h2> About us</h2>;
}

function Topics ({ match }) {
  console.log(match);
  return (
    <Router>
      <div>
        <h2>topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>components </Link>
          </li>
          <li>
            <Link to={`${match.url}/users`}>users </Link>
          </li>
          <li>
            <Link to={`${match.url}/ads`}>ads </Link>
          </li>
        </ul>
        <Route path={`${match.path}/:id`} component={Topic}/>
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    </Router>
  );
}

function Topic ({ match }) {
  console.log(match);
  return <h3> this topic id is {match.params.id}</h3>;
}

function Header () {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;