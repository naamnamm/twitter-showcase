const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
const fetch = require('node-fetch');
const url = require('url');
const path = require('path');

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const access_token =
  'AAAAAAAAAAAAAAAAAAAAALolGgEAAAAAzj%2F3%2BTeA%2BN04S2G8zGzn3pfMRI8%3DFotMuEbFwoKJVkmgk7fsX1sqDDu0AIjQ0bFYLyCqpkPCECz0JP';

const header = {
  headers: {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

app.get('/tweets/search', async (req, res) => {
  const url = new URL('https://api.twitter.com/1.1/search/tweets.json');
  const params = { q: 'nasa', result_type: 'popular', lang: 'en' };
  url.search = new URLSearchParams(params).toString();

  console.log(url);

  const fetchData = await fetch(url, header);
  const data = await fetchData.json();
  const mappedData = data.statuses.map((tweet) => tweet.text);

  res.send(mappedData);
});

const getData = async () => {
  const url = new URL(
    'https://api.twitter.com/1.1/search/tweets.json?q=from%3A'
  );
  const myTopFive = ['BillGates', 'MichelleObama', 'ZacEfron'];
  const mappedRequests = myTopFive.map((name) =>
    axios.get(`${url}${name}`, header)
  );

  try {
    const fetchData = await Promise.all(mappedRequests);
    return fetchData;
  } catch (error) {
    console.log(error);
  }
};

app.get('/tweets/user', async (req, res) => {
  const data = await getData();
  //original
  const tweetsFromUser = data.map((data) => data.data.statuses);
  //sample
  const mappedText = data.map((data) =>
    data.data.statuses.map((item) => item.text)
  );

  const randomTweets = mappedText.map((item) => {
    let randomNum = Math.floor(Math.random() * Math.floor(item.length));

    return item[randomNum];
  });

  res.send(randomTweets);
});

app.listen(port, () => console.log(`server started on port ${port}`));

//TODO
// app.get('/', async (req, res) => {
//   res.send(//static file);
// });

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     { id: 1, name: 'John', age: 8 },
//     { id: 2, name: 'Mary', age: 9 },
//     { id: 3, name: 'Henry', age: 10 },
//   ];

//   res.json(customers);
// });

//-------------------------------
//good
// app.get('/tweets', async (req, res) => {
//   const url = new URL('https://api.twitter.com/1.1/search/tweets.json');
//   const params = { q: 'nasa', result_type: 'popular' };
//   url.search = new URLSearchParams(params).toString();

//   const fetchData = await fetch(url, header);
//   const json = await fetchData.json();

//   res.json(json);
// });

// app.get('/tweets/user', async (req, res) => {
//   const url = new URL('https://api.twitter.com/1.1/search/tweets.json');
//   const params = { q: 'from:BillGates', q: 'from:MichelleObama' };
//   url.search = new URLSearchParams(params).toString();

//   const fetchData = await fetch(url, header);
//   const tweets = await fetchData.json();
//   const random = Math.floor(Math.random() * Math.floor(tweets.statuses.length));
//   console.log(random);

//   res.send(tweets.statuses[random].user.name);
// });
