import React from 'react';
import {
  FaFlask,
  FaLandmark,
  FaSpaceShuttle,
  FaNewspaper,
  FaFootballBall,
  FaGrinSquintTears,
} from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import './SearchTweetPage.css';

const SearchSidebar = ({ handleClick }) => {
  return (
    <div className='side-nav'>
      <Button
        value='science'
        onClick={(e) => handleClick(e)}
        className='my-2 btn-block'
      >
        <FaFlask size='2em' className='mr-1' />
        Science
      </Button>

      <Button
        value='politics'
        onClick={(e) => handleClick(e)}
        className='my-2 btn-block'
      >
        <FaLandmark size='2em' className='mr-1' />
        Politics
      </Button>

      <Button
        value='space'
        onClick={(e) => handleClick(e)}
        className='my-2 btn-block'
      >
        <FaSpaceShuttle size='2em' className='mr-1' />
        Space
      </Button>

      <Button
        value='news'
        onClick={(e) => handleClick(e)}
        className='my-2 btn-block'
      >
        <FaNewspaper size='2em' className='mr-1' />
        News
      </Button>

      <Button
        value='sports'
        onClick={(e) => handleClick(e)}
        className='my-2 btn-block'
      >
        <FaFootballBall size='2em' className='mr-1' />
        Sports
      </Button>

      <Button
        value='meme'
        onClick={(e) => handleClick(e)}
        className='my-2 btn-block'
      >
        <FaGrinSquintTears size='2em' className='mr-1' />
        Meme
      </Button>
    </div>
  );
};

export default SearchSidebar;
