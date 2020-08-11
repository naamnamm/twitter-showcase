import React from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './css/SearchTweetPage.css';
import SearchTweet from './SearchTweet';
import mockData from './mockData';
import SearchSidebar from './SearchSidebar';
import { FaTwitter } from 'react-icons/fa';

const SearchTweetPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const tweets = mockData.statuses;

  const displayTweets = tweets.map((tweet) => (
    <SearchTweet key={tweet.id_str} tweet={tweet} />
  ));

  useEffect(() => {
    window.addEventListener('resize', handleSize);
  }, []);

  return (
    <Container>
      <FaTwitter />

      <header>
        <InputGroup className='mb-3'>
          <FormControl
            placeholder='Search Tweet'
            aria-label='Search Tweet'
            aria-describedby='basic-addon2'
          />
          <InputGroup.Append>
            <Button variant='outline-secondary'>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </header>

      <main className='main-content-container'>
        <div className='mx-auto d-flex justify-content-center'>
          <div className='side-bar'>
            <SearchSidebar />
          </div>
          <div className='white-space'></div>

          <div className='main-content'>{displayTweets}</div>
        </div>
      </main>

      <p>{windowWidth} px </p>
    </Container>
  );
};

export default SearchTweetPage;
