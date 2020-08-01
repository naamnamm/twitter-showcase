import React from 'react';
import {
  FaFlask,
  FaLandmark,
  FaSpaceShuttle,
  FaNewspaper,
} from 'react-icons/fa';
import { Card } from 'react-bootstrap';

const SearchSidebar = () => {
  return (
    <div>
      <div className='d-flex'>
        <FaFlask size='2em' />
        <p> Science </p>
      </div>

      <div className='d-flex react-icon'>
        <FaLandmark size='2em' />
        <p> Politics </p>
      </div>

      <div className='d-flex'>
        <FaSpaceShuttle size='2em' />
        <p> Space </p>
      </div>

      <div className='d-flex'>
        <FaNewspaper size='2em' />
        <p> News </p>
      </div>
    </div>
  );
};

export default SearchSidebar;
