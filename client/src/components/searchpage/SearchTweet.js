import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import reactStringReplace from 'react-string-replace';
import moment from 'moment';

const Tweet = ({ tweet }) => {
  let mediaType = tweet.extended_entities
    ? tweet.extended_entities.media[0].type
    : null;

  let displayMedia =
    mediaType === 'photo'
      ? tweet.extended_entities.media.map(({ media_url }, index, tweet) => {
          let title = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.title
            : null;
          let description = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.description
            : null;

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
          let title = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.title
            : null;
          let description = tweet[0].additional_media_info
            ? tweet[0].additional_media_info.description
            : null;

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

  const formatStr = (text) => {
    let replacedText;

    replacedText = reactStringReplace(text, /(https?:\/\/\S+)/g, (match, i) => (
      <a key={match + i} href={match}>
        {match}
      </a>
    ));
    replacedText = reactStringReplace(replacedText, /@(\w+)/g, (match, i) => (
      <a key={match + i} href={`https://twitter.com/${match}`}>
        @{match}
      </a>
    ));
    replacedText = reactStringReplace(replacedText, /#(\w+)/g, (match, i) => (
      <a key={match + i} href={`https://twitter.com/hashtag/${match}`}>
        #{match}
      </a>
    ));

    replacedText = reactStringReplace(replacedText, /\n/g, (match, i) => (
      <p key={i}>{match}</p>
    ));

    return replacedText;
  };

  const formatNumber = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formatTime = (postTime) => {
    const diff = new Date() - new Date(postTime);
    let msec = diff;
    let hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;

    const displayTime = hh > 24 ? moment(postTime).format('MMM D') : `${hh}h`;

    return displayTime;
  };

  return (
    <div className='row'>
      <div className='main-tweet-container border d-flex col'>
        <Image
          src={tweet.user.profile_image_url}
          className='rounded-sm user-logo'
          roundedCircle
        />
        <Card className='p-1 border-light'>
          <div className='text-left'>
            <a
              href={`https://twitter.com/${tweet.user.screen_name}`}
              className='font-weight-bold text-decoration-none text-dark'
            >
              {tweet.user.name}
            </a>
            <span className='text-muted ml-1'>@{tweet.user.screen_name}</span>
            <span className='text-muted ml-1'>
              {' '}
              · {formatTime(tweet.created_at)}
            </span>
          </div>

          <div className='text-left'>{formatStr(tweet.full_text)}</div>

          {displayMedia}

          <div className='buttons-container d-flex'>
            <div className='retweets-container d-flex mr-4'>
              <div className='mr-2'>
                <FontAwesomeIcon color='green' size='sm' icon={faRetweet} />
              </div>
              <div>{formatNumber(tweet.retweet_count)}</div>
            </div>

            <div className='likes-container d-flex'>
              <div className='mr-2'>
                <FontAwesomeIcon color='red' size='sm' icon={faHeart} />
              </div>
              <div>{formatNumber(tweet.favorite_count)}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tweet;
