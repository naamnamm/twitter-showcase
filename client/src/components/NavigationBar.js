import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>
          <FontAwesomeIcon color='skyblue' size='lg' icon={faTwitter} />
        </Navbar.Brand>

        <Nav className='ml-auto'>
          <Link to='/' className='text-decoration-none text-white '>
            Home
          </Link>

          <Link to='/search' className='text-decoration-none text-white ml-4'>
            Search
          </Link>

          <Link
            to='/random'
            className='text-decoration-none text-white ml-4 mr-2'
          >
            Random
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
