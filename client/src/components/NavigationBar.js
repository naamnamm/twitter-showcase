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
          <Nav.Link>
            <Link to='/' className='text-decoration-none text-white'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/search' className='text-decoration-none text-white'>
              Search
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/random' className='text-decoration-none text-white'>
              Random
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
