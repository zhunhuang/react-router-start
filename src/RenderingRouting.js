import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function Index ({ name }) {
  return <h2>welcome home, dear {name}. </h2>;
}

function About () {
  return <h2>About us</h2>;
}

function Users () {
  return <h2>Users Page</h2>;
}

class App extends Component {
  render () {
    const name = 'nolan';
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
          </ul>
          <Route exact path='/' render={() => <Index name={name}/>}/>
          <Route path='/about' render={(props) => {
            console.log(props);
            return <About {...props}/>;
          }}/>
          <Route path='/users' component={Users}/>
        </div>
      </Router>
    );
  }
}

export default App;
