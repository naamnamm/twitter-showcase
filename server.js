const express = require('express');
const app = express();
const port = 5000;
const axios = require('axios');
const fetch = require('node-fetch');
const url = require('url');

const access_token =
  'AAAAAAAAAAAAAAAAAAAAALolGgEAAAAAzj%2F3%2BTeA%2BN04S2G8zGzn3pfMRI8%3DFotMuEbFwoKJVkmgk7fsX1sqDDu0AIjQ0bFYLyCqpkPCECz0JP';

const header = {
  headers: {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

app.get('/tweets', async (req, res) => {
  const url = new URL('https://api.twitter.com/1.1/search/tweets.json');
  const params = { q: 'nasa', result_type: 'popular', lang: 'en' };
  url.search = new URLSearchParams(params).toString();

  const fetchData = await fetch(url, header);
  const data = await fetchData.json();
  const mappedData = data.statuses.map((tweet) => tweet.text);

  res.send(mappedData);
});

app.listen(port, () => console.log(`server started on port ${port}`));

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
