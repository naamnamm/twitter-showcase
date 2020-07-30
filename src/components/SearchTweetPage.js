import React from 'react'
import { Container, Card } from 'react-bootstrap'

const SearchTweetPage = () => {

  return (


    <div>
      <Container className='w-75'>


        <div className='row row-1 justify-content-around'>
          <div className='col-3 border'> row 1 col 1 </div>

          <div className='col-8 border'> <Card style={{ width: '18rem' }}>
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

        <div className='row row-2 justify-content-around'>
          <div className='col-3 border'> row 2 col 1 </div>

          <div className='col-8 border'>
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
    </div>
  )
}

export default SearchTweetPage
