import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaHeart, FaComment, FaRetweet } from 'react-icons/fa';

const RandomTweet = () => {
  return (
    <div className='border d-flex col'>
      <Image
        src='https://previews.123rf.com/images/koblizeek/koblizeek1904/koblizeek190400053/120906930-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg'
        className='rounded-sm user-logo'
      />
      <Card className='p-1'>
        <div className='text-left'>Username</div>

        <div className='text-left'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>

        <Card className='my-2'>
          <Card.Img
            variant='top'
            src='https://scx1.b-cdn.net/csz/news/800/2019/water.jpg'
          />
          <Card.Text>Card Title</Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card>

        <div className='buttons-container d-flex'>
          <div className='comments-container d-flex mr-4'>
            <div className='mr-2'>
              <FaComment color='blue' />
            </div>
            <div>30</div>
          </div>

          <div className='retweets-container d-flex mr-4'>
            <div className='mr-2'>
              <FaRetweet color='green' />
            </div>
            <div>30</div>
          </div>

          <div className='likes-container d-flex'>
            <div className='mr-2'>
              <FaHeart color='red' />
            </div>
            <div>30</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RandomTweet;
