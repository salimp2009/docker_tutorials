const express = require('express')
const process = require('process')
const app = express()

process.on('SIGINT', () => {
  console.log('Application is being interrupted')
  process.exit(0) // exit correctly
})

process.on('SIGTERM', () => {
  console.log('Application is being terminated')
  process.exit(0) // exit correctly
})

app.get('/', function (req, res) {
  res.send('This express app execute by Nodejs container!')
})

app.listen(3000)
