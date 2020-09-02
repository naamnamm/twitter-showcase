import React from 'react';
import { Button, ButtonGroup, Jumbotron, Spinner } from 'react-bootstrap';
import './RandomPage.css';
import { useState } from 'react';
import RandomTweet from './RandomTweet';

const RandomMain = () => {
  const [searchUser, setSearchUser] = useState('');

  const handleClick = (e) => {
    setSearchUser(e.target.value);
  };

  const displayLoading = (
    <Jumbotron className='jumbo-size mx-auto'>
      <Spinner className='mt-4' animation='border' />
    </Jumbotron>
  );

  const displayContent = !searchUser ? (
    displayLoading
  ) : (
    <RandomTweet key={Date.now()} q={`from:${searchUser}`} />
  );

  return (
    <div className='container'>
      <header className='d-flex'>
        <ButtonGroup className='mx-auto my-3'>
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
            value='VancityReynolds'
            className='mr-1 rounded'
          >
            Ryan Reynolds
          </Button>
        </ButtonGroup>
      </header>

      <main>
        <div className='row mx-auto my-auto'>{displayContent}</div>
      </main>
    </div>
  );
};

export default RandomMain;
