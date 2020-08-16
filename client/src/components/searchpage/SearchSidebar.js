import React from 'react';
import {
  FaFlask,
  FaLandmark,
  FaSpaceShuttle,
  FaNewspaper,
} from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import './SearchTweetPage.css';

const SearchSidebar = () => {
  return (
    <div className='side-nav'>
      <ul className='p-2'>
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
      </ul>
    </div>
  );
};

export default SearchSidebar;
