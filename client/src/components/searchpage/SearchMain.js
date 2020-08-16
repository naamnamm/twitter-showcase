import React from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './SearchTweetPage.css';
import SearchTweet from './SearchTweet';
import mockData from '../randompage/mockData';
import SearchSidebar from './SearchSidebar';
import { FaTwitter } from 'react-icons/fa';
import axios from 'axios';

const SearchTweetPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchTweet, setSearchTweet] = useState([]);

  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const getTweets = async () => {
    try {
      const getTweets = await axios.get('/tweets/search');
      return getTweets;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleSize);

    const getSearchTweets = async () => {
      const tweets = await getTweets();
      console.log(tweets);
      setSearchTweet(tweets.data);
    };

    getSearchTweets();
  }, []);

  const displayTweets = searchTweet.map((tweet) => (
    <SearchTweet key={tweet.id} tweet={tweet} />
  ));

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
