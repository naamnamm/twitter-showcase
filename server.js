const express = require('express');

const app = express();

const port = 5000;

app.get('https://api.twitter.com/1.1/search/tweets.json?q=nasa', (req, res) => {
  console.log(req);
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
