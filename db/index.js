const mongoose = require('mongoose')
require('dotenv').config()

mongoose 
  .connect('mongodb://127.0.0.1:27017/warcraftDatabase')
  .then(()=> {
    console.log('Connected to MongoDB')
  })
  .catch((e) => {
    console.error('Connection error: ', e.message)
  })

  const db = mongoose.connection

  module.exports = db