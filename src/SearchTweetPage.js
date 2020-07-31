import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import widthLayout from '../src/images/size-3.jpg'
import './css/SearchTweetPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons'


const SearchTweetPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleSize)

  }, [])

  return (


    <div>
      <Container fluid>
        <div className='row row-1'>
          <div className='side-bar border'> row 1 col 1 </div>

          <div className='main-content border d-flex'>
            <Image src="https://previews.123rf.com/images/koblizeek/koblizeek1904/koblizeek190400053/120906930-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg" className='rounded-sm user-logo' />
            <Card className='p-1'>

              <div className="text-left">Username</div>

              <div className="text-left">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </div>

              <Card className='my-2'>
                <Card.Img variant="top" src="https://scx1.b-cdn.net/csz/news/800/2019/water.jpg" />

                <Card.Text>Card Title</Card.Text>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
              </Card>

              <div className='buttons-container d-flex'>
                <div className='comments-container d-flex mr-4'>
                  <div className='mr-2'><FontAwesomeIcon color="blue" size="sm" icon={faComment} /></div>
                  <div>6.5K</div>
                </div>
                <div className='retweets-container d-flex mr-4'>
                  <div className='mr-2'><FontAwesomeIcon color="green" size="sm" icon={faRetweet} /></div>
                  <div>20.7K</div>
                </div>
                <div className='likes-container d-flex'>
                  <div className='mr-2'><FontAwesomeIcon color="red" size="sm" icon={faHeart} /></div>
                  <div>129K</div>
                </div>
              </div>


            </Card>

          </div>
        </div>

        <div className='row row-2'>
          <div className='side-bar border'> row 2 col 1 </div>

          <div className='main-content border'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <p>{windowWidth} px </p>
      <img src={widthLayout} />

    </div>
  )
}

export default SearchTweetPage
