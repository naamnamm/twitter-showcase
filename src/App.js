import React, { useState } from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import RandomTweetPage from './components/RandomTweetPage';
import SearchMain from './components/SearchMain';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />

        <div className='App'>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/search' component={SearchMain} />
            <Route path='/random' component={RandomTweetPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
