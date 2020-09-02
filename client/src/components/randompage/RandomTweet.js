import React from 'react';
import { Card, Image, Jumbotron } from 'react-bootstrap';
import './RandomPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons';
import reactStringReplace from 'react-string-replace';

const RandomTweet = ({ q }) => {
  const [randomTweet, setRandomTweet] = useState([]);

  const getTweets = async () => {
    try {
      const getTweets = await axios.get(`/tweets/user/:${q}`);
      return getTweets;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUserTweets = async () => {
      const tweets = await getTweets();

      const randomNum = await Math.floor(
        Math.random() * Math.floor(tweets.data.length)
      );

      const randomTweet = await tweets.data[randomNum];

      function f() {
        return Array.from(arguments);
      }
      setRandomTweet(f(randomTweet));
    };

    getUserTweets();
  }, [q]);

  const formatStr = (text) => {
    let replacedText;

    replacedText = reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
      <a key={match + i} href={match}>
        {match}
      </a>
    ));
    replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
      <a key={match + i} href={`https://twitter.com/${match}`}>
        @{match}
      </a>
    ));
    replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
      <a key={match + i} href={`https://twitter.com/hashtag/${match}`}>
        #{match}
      </a>
    ));

    replacedText = reactStringReplace(replacedText, /\n/g, (match, i) => (
      <p key={match + i}>{match}</p>
    ));

    return replacedText;
  };

  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const displayTweet = randomTweet.map((tweet) => (
    <div key={Date.now()} className='d-flex main-tweet-container mx-auto'>
      <Image
        src={tweet.user.profile_image_url}
        className='rounded-sm user-logo mr-1'
        roundedCircle
      />
      <Card className='p-1'>
        <div className='text-left'>
          <a
            href={`https://twitter.com/${tweet.user.screen_name}`}
            className='font-weight-bold text-decoration-none text-dark'
          >
            {tweet.user.name}
          </a>
          <span className='text-muted ml-1'>@{tweet.user.screen_name}</span>
        </div>

        <div className='text-left'>{formatStr(tweet.full_text)}</div>

        <div className='buttons-container d-flex'>
          <div className='retweets-container d-flex mr-4'>
            <div className='mr-2'>
              <FontAwesomeIcon color='green' size='sm' icon={faRetweet} />
            </div>
            <div>{formatNumber(tweet.retweet_count)}</div>
          </div>

          <div className='likes-container d-flex'>
            <div className='mr-2'>
              <FontAwesomeIcon color='red' size='sm' icon={faHeart} />
            </div>
            <div>{formatNumber(tweet.favorite_count)}</div>
          </div>
        </div>
      </Card>
    </div>
  ));

  return <Jumbotron className='mx-auto jumbo-size'>{displayTweet}</Jumbotron>;
};

export default RandomTweet;
