import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Homepage.css';
import { useState } from 'react';

const Homepage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const displayMsg =
    isChecked === true ? (
      <span className='ml-3 text-danger'>Awesome!</span>
    ) : null;

  return (
    <div className='card-container'>
      <Card>
        <Card.Header className='font-weight-bold text-muted'>
          Daily Dose of Fun tweets
        </Card.Header>
        <Card.Body>
          <Card.Title className='mt-1 mb-4'>
            <FontAwesomeIcon color='skyblue' size='2x' icon={faTwitter} />
          </Card.Title>


          <Form inline className='w-75 mx-auto my-3'>
            <Form.Check
              type='checkbox'
              label='Ready for some tweets?'
              className='text-muted'
              onChange={handleChange}
            />
            {displayMsg}
          </Form>

          <Button className='my-3'>
            <Link to='/search' className='text-light text-decoration-none'>
              Search Tweets
            </Link>
          </Button>
          <Button className='ml-3 my-3'>
            <Link to='/random' className='text-light text-decoration-none'>
              Random Tweets
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Homepage;
