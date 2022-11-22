const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([
    {
    name: 'Ram',
    email: 'ram@gmail.com'
    },
    {
    name: 'Vedhanth',
    email: 'veda@gmail.com'
    },
    {
    name: 'Abinaya',
    email: 'abi@gmail.com'
    },
    {
      name: 'Gowtham',
      email: 'gauti@gmail.com'
      }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})