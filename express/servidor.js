const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Atacalma descansando')
})

app.get('/saludos', function (req, res) {
  res.send('Atacalma te Saluda')
})

app.listen(8989)