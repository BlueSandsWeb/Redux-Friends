import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Components
import Login from './components/Login.js';
import FriendsList from './components/FriendsList.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Friends List</h1>
          <nav>
          </nav>
          <Route path="/login" component={Login} />
          <Route path="/friends-list" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
