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
  const [searchInput, setSearchInput] = useState('');

  const handleSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
    console.log(searchValue);
  };

  const handleSearchRequest = async () => {
    console.log(searchInput);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ q: searchInput }),
    };

    const fetchData = await fetch('/tweets/search', options);
    const json = await fetchData.json();
    console.log(json);
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
            onChange={handleChange}
            value={searchInput}
          />
          <InputGroup.Append>
            <Button
              onClick={() => handleSearchRequest()}
              variant='outline-secondary'
            >
              Search
            </Button>
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
