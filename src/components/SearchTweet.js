import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faRetweet,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'react-bootstrap';

const Tweet = ({ tweet }) => {
  console.log(tweet);

  return (
    <div className='row'>
      <div className='main-tweet-container border d-flex col'>
        <Image
          src='https://previews.123rf.com/images/koblizeek/koblizeek1904/koblizeek190400053/120906930-man-icon-profile-member-user-perconal-symbol-vector-on-white-isolated-background-.jpg'
          className='rounded-sm user-logo'
        />
        <Card className='p-1'>
          <div className='text-left'>{tweet.user.name}</div>

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
                <FontAwesomeIcon color='blue' size='sm' icon={faComment} />
              </div>
              <div>{tweet.comment_count}</div>
            </div>

            <div className='retweets-container d-flex mr-4'>
              <div className='mr-2'>
                <FontAwesomeIcon color='green' size='sm' icon={faRetweet} />
              </div>
              <div>{tweet.comment_count}</div>
            </div>

            <div className='likes-container d-flex'>
              <div className='mr-2'>
                <FontAwesomeIcon color='red' size='sm' icon={faHeart} />
              </div>
              <div>{tweet.like_count}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tweet;
