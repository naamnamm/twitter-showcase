import React from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap';
import './css/RandomPage.css';
import { useState, useEffect } from 'react';
import RandomTweet from './RandomTweet';
import RandomPhoto from './RandomPhoto';

const RandomMain = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);
  }, []);

  return (
    <div className='container'>
      <p>{windowWidth}</p>
      <header className='d-flex'>
        <h3>My Fav 5</h3>
        <ButtonGroup className='ml-auto'>
          <Button className='mr-1 rounded'>Bill Gates</Button>
          <Button className='mr-1 rounded'>Michelle Obama</Button>
          <Button className='mr-1 rounded'>xxx</Button>
          <Button className='mr-1 rounded'>xxx</Button>
          <Button className='mr-1 rounded'>xxx</Button>
        </ButtonGroup>
      </header>

      <main>
        <div className='content-container'>
          <div className='row'>
            <RandomTweet />
            <RandomPhoto name='bill_gates' />
          </div>
          <div className='row'>
            <RandomPhoto />
            <RandomTweet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RandomMain;
