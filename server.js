const express = require('express')

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, name: "John", age: 8 },
    { id: 2, name: "Mary", age: 9 },
    { id: 3, name: "Henry", age: 10 }
  ]

  res.json(customers)
})

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`))