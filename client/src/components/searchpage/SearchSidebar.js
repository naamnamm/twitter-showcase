import React from 'react';
import {
  FaFlask,
  FaLandmark,
  FaSpaceShuttle,
  FaNewspaper,
} from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import './SearchTweetPage.css';

const SearchSidebar = ({ handleClick }) => {
  return (
    <div className='side-nav'>
      <Button
        value='science'
        onClick={(e) => handleClick(e)}
        className='mb-1 mt-1'
      >
        <FaFlask size='2em' className='mr-1' />
        Science
      </Button>

      <Button
        value='politics'
        onClick={(e) => handleClick(e)}
        className='mb-1 mt-1'
      >
        <FaLandmark size='2em' className='mr-1' />
        Politics
      </Button>

      <Button
        value='space'
        onClick={(e) => handleClick(e)}
        className='mb-1 mt-1'
      >
        <FaSpaceShuttle size='2em' className='mr-1' />
        Space
      </Button>

      <Button
        value='news'
        onClick={(e) => handleClick(e)}
        className='mb-1 mt-1'
      >
        <FaNewspaper size='2em' className='mr-1' />
        News
      </Button>

      {/* <ul className='p-2'>
        <li className='list-unstyled text-left my-3 mx-4'>
          <FaFlask size='2em' />
          <a href='#' className='link-label text-decoration-none'>
            {' '}
            Science{' '}
          </a>
        </li>

        <li className='list-unstyled text-left my-3 mx-4'>
          <FaLandmark size='2em' />
          <a href='#' className='link-label text-decoration-none'>
            {' '}
            Politics{' '}
          </a>
        </li>

        <li className='list-unstyled text-left my-3 mx-4'>
          <FaSpaceShuttle size='2em' />
          <a href='#' className='link-label text-decoration-none'>
            {' '}
            Space{' '}
          </a>
        </li>

        <li className='list-unstyled text-left my-3 mx-4'>
          <FaNewspaper size='2em' />
          <a href='#' className='link-label text-decoration-none'>
            {' '}
            News{' '}
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default SearchSidebar;
