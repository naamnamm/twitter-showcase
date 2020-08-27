import React from 'react';
import {
  Container,
  Button,
  ButtonGroup,
  Jumbotron,
  Spinner,
} from 'react-bootstrap';
import './RandomPage.css';
import { useState, useEffect } from 'react';
import RandomTweet from './RandomTweet';
import RandomPhoto from './RandomPhoto';
import axios from 'axios';

const RandomMain = () => {
  const [userTweet, setUserTweet] = useState('');
  const [user, setUser] = useState('');
  const [filterTweet, setFilteredTweet] = useState([]);

  const handleClick = (e) => {
    setUser(e.target.value);
  };

  //if !user = jumbotron, else show tweet
  const displayLoading = (
    <Jumbotron className='jumbo-size mx-auto'>
      <Spinner animation='border' />
    </Jumbotron>
  );

  const displayContent = !user ? (
    displayLoading
  ) : (
    <RandomTweet q={`from:${user}`} />
  );

  return (
    <div className='container'>
      <header className='d-flex'>
        <ButtonGroup className='mx-auto'>
          <Button
            onClick={(e) => handleClick(e)}
            value='BillGates'
            className='mr-1 rounded'
          >
            Bill Gates
          </Button>
          <Button
            onClick={(e) => handleClick(e)}
            value='MichelleObama'
            className='mr-1 rounded'
          >
            Michelle Obama
          </Button>
          <Button
            onClick={(e) => handleClick(e)}
            value='Trevornoah'
            className='mr-1 rounded'
          >
            Trevor Noah
          </Button>
          <Button
            onClick={(e) => handleClick(e)}
            value='jimmyfallon'
            className='mr-1 rounded'
          >
            Jimmy Fallon
          </Button>
          <Button
            onClick={(e) => handleClick(e)}
            value='nickjonas'
            className='mr-1 rounded'
          >
            Nick Jonas
          </Button>
        </ButtonGroup>
      </header>

      <main>
        <div className='content-container'>
          <div className='row'>{displayContent}</div>
        </div>
      </main>
    </div>
  );
};

export default RandomMain;
