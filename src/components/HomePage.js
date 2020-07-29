import React from 'react'
import { Button, Card } from 'react-bootstrap';
import logo from '../images/explore.jpg'
import { Link } from 'react-router-dom'


const Homepage = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src={logo} alt="logo image" />
        <Card.ImgOverlay>
          <Card.Text>Find your inspiration</Card.Text>
          <Button>
            <Link to='/search' className='text-light'>
              Search Tweets
            </Link>
          </Button>
          <Button>
            <Link to='/random' className='text-light'>
              Random Tweets
            </Link>
          </Button>
        </Card.ImgOverlay>
      </Card>

    </div>
  )
}


export default Homepage
