import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'react-bootstrap';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

const Tweet = ({ tweet }) => {
  console.log(tweet);

  let mediaType = tweet.extended_entities
    ? tweet.extended_entities.media[0].type
    : null;

  let tweetText =
    tweet.extended_entities &&
    tweet.extended_entities.media[0].additional_media_info
      ? tweet.extended_entities.media[0].additional_media_info.title
      : null;

  console.log(tweetText);

  let displayMedia =
    mediaType === 'photo'
      ? tweet.extended_entities.media.map(({ media_url }, index, tweet) => {
          let title = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.title
            : null;
          let description = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.description
            : null;
          // console.log(title);

          return (
            <Card className='my-2' key={index}>
              <Card.Img variant='top' src={media_url} />
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card>
          );
        })
      : mediaType === 'video'
      ? tweet.extended_entities.media.map(({ video_info }, index, tweet) => {
          // console.log(tweet);
          // console.log(tweet.length);
          let title = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.title
            : null;
          let description = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.description
            : null;
          // console.log(title, description);

          return (
            <Card className='my-2' key={index}>
              <ReactPlayer
                width='468px'
                url={video_info.variants[0].url}
                controls={true}
              />
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card>
          );
        })
      : null;

  const formatText = (text) => {
    let repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
    return repl;
  };

  const displayText = () => {
    //let regExp = '/[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi';
    let parts = tweet.full_text.split(/(^|\W)(#[a-z\d][\w-]*)/gi);
    for (var i = 1; i < parts.length; i += 2) {
      console.log(parts[i]);
      parts[i] = (
        <a href={parts[i]} key={i}>
          {parts[i]}
        </a>
      );
    }

    return parts;
  };

  const displayText2 = (text) => {
    let parts = text.replace(/(^|\W)(#[a-z\d][\w-]*)/gi, '$1<a>$2</a>');
    //https://stackoverflow.com/questions/58387327/creating-a-simple-hashtag-formatter-in-react-native
    // for (var i = 1; i < parts.length; i += 2) {
    //   console.log(parts[i]);
    //   parts[i] = (
    //     <a href={parts[i]} key={i}>
    //       {parts[i]}
    //     </a>
    //   );
    // }

    return parts;
  };

  return (
    <div className='row'>
      <div className='main-tweet-container border d-flex col'>
        <Image
          src={tweet.user.profile_image_url}
          className='rounded-sm user-logo'
          roundedCircle
        />
        <Card className='p-1'>
          <div className='text-left'>
            <a
              href={`https://twitter.com/${tweet.user.screen_name}`}
              className='font-weight-bold text-decoration-none text-dark'
            >
              {tweet.user.name}
            </a>
            <span className='text-muted ml-1'>@{tweet.user.screen_name}</span>
          </div>

          <div className='text-left'>{tweet.full_text}</div>

          {displayText2(tweet.full_text)}

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
