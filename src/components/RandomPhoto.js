import React from 'react';
import { Image } from 'react-bootstrap';
import mockData from './mockData';

const RandomPhoto = ({ name }) => {
  console.log(name);
  console.log(mockData.imageData);

  //loop through array of names - if matched map the url with <Image>
  //const displayImages = mockData.im

  return (
    <div className='col'>
      <Image
        src='https://i.insider.com/5f21f32f3f737001697f2878?width=1100&format=jpeg&auto=webp'
        thumbnail
      />
    </div>
  );
};

export default RandomPhoto;
