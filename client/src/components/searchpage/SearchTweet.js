import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'react-bootstrap';

const Tweet = ({ tweet }) => {
  console.log(tweet);

  //if media != null
  // ----check type if type is photo or animated_gif > img tag
  // ---------------if type is video > video tag

  //const result = tweet.extended_entities;
  //const sample = tweet.extended_entities ? tweet.extended_entities.media : null;
  const media = tweet.extended_entities
    ? tweet.extended_entities.media.map(
        ({ type, media_url, additional_media_info }) => ({
          type,
          media_url,
          additional_media_info,
        })
      )
    : null;

  console.log(media);

  const displayPhoto =
    media != null
      ? media.map(({ media_url, additional_media_info }) => (
          <Card className='my-2'>
            <Card.Img variant='top' src={media_url} />
            {/* <Card.Text>{title}</Card.Text>
              <Card.Text>{description}</Card.Text> */}
          </Card>
        ))
      : null;

  //const displayVideo =

  const displayMedia = media == null ? null : displayPhoto;

  return (
    <div className='row'>
      <div className='main-tweet-container border d-flex col'>
        <Image
          src={tweet.user.profile_image_url}
          className='rounded-sm user-logo'
        />
        <Card className='p-1'>
          <div className='text-left'>{tweet.user.name}</div>

          <div className='text-left'>{tweet.full_text}</div>

          {displayMedia}

          <div className='buttons-container d-flex'>
            <div className='retweets-container d-flex mr-4'>
              <div className='mr-2'>
                <FontAwesomeIcon color='green' size='sm' icon={faRetweet} />
              </div>
              <div>{tweet.retweet_count}</div>
            </div>

            <div className='likes-container d-flex'>
              <div className='mr-2'>
                <FontAwesomeIcon color='red' size='sm' icon={faHeart} />
              </div>
              <div>{tweet.favorite_count}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tweet;
