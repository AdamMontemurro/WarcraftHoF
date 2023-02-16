const express = require('express');
const routes = require('./routes');
const db = require('./db');
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001;

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

app.use('/', routes)

db.on('error', console.error.bind(console, 'Connection Error '))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Port: ${PORT}`))