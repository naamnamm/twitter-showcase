import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'react-bootstrap';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

const Tweet = ({ tweet }) => {
  //console.log(tweet);

  let mediaType = tweet.extended_entities
    ? tweet.extended_entities.media[0].type
    : null;

  let displayMedia =
    mediaType === 'photo'
      ? tweet.extended_entities.media.map(
          ({ media_url, additional_media_info }) => (
            <Card className='my-2'>
              <Card.Img variant='top' src={media_url} />
              {/* <Card.Text>{title}</Card.Text>
            <Card.Text>{description}</Card.Text> */}
            </Card>
          )
        )
      : mediaType === 'video'
      ? tweet.extended_entities.media.map(({ video_info }) => (
          <Card className='my-2'>
            <ReactPlayer
              width='468px'
              url={video_info.variants[0].url}
              controls={true}
            />
            {/* <Card.Text>{title}</Card.Text>
                <Card.Text>{description}</Card.Text> */}
          </Card>
        ))
      : null;

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

// const displayPhoto =
//   media != null
//     ? media.map(({ media_url, additional_media_info }) => (
//         <Card className='my-2'>
//           <Card.Img variant='top' src={media_url} />
//           {/* <Card.Text>{title}</Card.Text>
//             <Card.Text>{description}</Card.Text> */}
//         </Card>
//       ))
//     : null;

//const displayVideo =

// const displayMedia = media == null ? null : displayPhoto;
