import React from 'react';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './SearchTweetPage.css';
import SearchTweet from './SearchTweet';
import SearchSidebar from './SearchSidebar';
import axios from 'axios';

const SearchTweetPage = () => {
  const [searchTweet, setSearchTweet] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);
  };

  const handleSearchRequest = async () => {
    let q = searchInput;

    const fetchData = await fetch(`/tweets/search/:${q}`);
    const json = await fetchData.json();
    setSearchTweet(json.statuses);
    setSearchInput('');
  };

  const handleClick = async (e) => {
    let q = e.target.value;

    const fetchData = await fetch(`/tweets/search/:${q}`);
    const json = await fetchData.json();
    setSearchTweet(json.statuses);
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
    const getSearchTweets = async () => {
      const tweets = await getTweets();
      setSearchTweet(tweets.data);
    };

    getSearchTweets();
  }, []);

  const displayTweets = searchTweet.map((tweet) => (
    <SearchTweet key={tweet.id} tweet={tweet} />
  ));

  return (
    <Container>
      <header className='mt-4 mb-4'>
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
            <SearchSidebar handleClick={handleClick} />
          </div>
          <div className='white-space'></div>

          <div className='main-content'>{displayTweets}</div>
        </div>
      </main>
    </Container>
  );
};

export default SearchTweetPage;
