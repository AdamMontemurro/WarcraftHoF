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

app.use('/', routes)

db.on('error', console.error.bind(console, 'Connection Error '))

app.listen(PORT, () => console.log(`Port: ${PORT}`))