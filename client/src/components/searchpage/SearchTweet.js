import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRetweet } from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'react-bootstrap';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import reactStringReplace from 'react-string-replace';

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

  const parseText = (text) => {
    let repl = text.replace(/#(\w+)/g, '<a href="#">#$1</a>');
    // putting it in an array - returns `Object Object` on the page
    return repl;
  };

  String.prototype.parseURL = function () {
    return this.replace(
      /[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g,
      function (url) {
        return <a href={url}>{url}</a>;
      }
    );
  };

  String.prototype.parseUsername = function () {
    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function (u) {
      var username = u.replace('@', '');

      return u.link('http://twitter.com/' + username);
    });
  };

  String.prototype.parseHashtag = function () {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function (t) {
      var tag = t.replace('#', '%23');

      return t.link('http://search.twitter.com/search?q=' + tag);
    });
  };

  const displayText = (text) => {
    let parts = text
      .split(/(^|\W)(#[a-z\d][\w-]*)/gi)
      .map((part) => (part.includes('#') ? <a href={part}>{part}</a> : part));

    console.log(parts);
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
      <p>{match}</p>
    ));

    return replacedText;
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

          <div className='text-left'>{formatStr(tweet.full_text)}</div>

          {/* <div className='text-left'>
            {tweet.full_text.parseURL().parseHashtag().parseUsername()}
          </div> */}

          {/* <div className='text-left d-inline'>
            {displayText(tweet.full_text)}
          </div> */}

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
