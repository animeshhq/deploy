const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(25565, () => {
  console.log('App running on port 25565')
})
