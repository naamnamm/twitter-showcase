const express = require('express')
const app = express()
const port = 3000

app.use(express.static('src'));

//define endpoint
app.get('/', (req, res) => res.send('Hello World!'))

//start the application
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))