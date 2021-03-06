import React from 'react';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import RandomMain from './components/randompage/RandomMain';
import SearchMain from './components/searchpage/SearchMain';
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
            <Route path='/random' component={RandomMain} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
