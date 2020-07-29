import React, { useState } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage'
import RandomTweetPage from './components/RandomTweetPage'
import SearchTweetPage from './components/SearchTweetPage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {


  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/search' component={SearchTweetPage} />
          <Route path='/random' component={RandomTweetPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
