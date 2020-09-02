const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');
const path = require('path');

const access_token =
  'AAAAAAAAAAAAAAAAAAAAALolGgEAAAAAzj%2F3%2BTeA%2BN04S2G8zGzn3pfMRI8%3DFotMuEbFwoKJVkmgk7fsX1sqDDu0AIjQ0bFYLyCqpkPCECz0JP';

const header = {
  headers: {
    Authorization: `Bearer ${access_token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/tweets/search', async (req, res) => {
  const url = new URL('https://api.twitter.com/1.1/search/tweets.json');
  const params = {
    q: 'nasa',
    result_type: 'popular',
    lang: 'en',
    tweet_mode: 'extended',
  };
  url.search = new URLSearchParams(params).toString();

  const fetchData = await fetch(url, header);
  const data = await fetchData.json();
  const mappedData = data.statuses.map((tweet) => tweet);

  res.send(mappedData);
});

app.get('/tweets/search/:q', async (req, res) => {
  const additionalParams = {
    result_type: 'popular',
    lang: 'en',
    tweet_mode: 'extended',
  };

  Object.assign(req.params, additionalParams);

  const url = new URL('https://api.twitter.com/1.1/search/tweets.json');
  url.search = new URLSearchParams(req.params).toString();
  const fetchData = await fetch(url, header);
  const data = await fetchData.json();
  res.json(data);
});

app.get('/tweets/user/:q', async (req, res) => {
  const url = new URL('https://api.twitter.com/1.1/search/tweets.json?');

  const additionalParams = {
    tweet_mode: 'extended',
  };

  Object.assign(req.params, additionalParams);

  url.search = new URLSearchParams(req.params).toString();
  const fetchData = await fetch(url, header);
  const tweets = await fetchData.json();
  res.send(tweets.statuses);
});

app.listen(port, () => console.log(`server started on port ${port}`));
