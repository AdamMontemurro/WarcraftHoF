const express = require('express');
const routes = require('./routes');
const db = require('./db');

const PORT = process.env.PORT || 3001;

const app = express()
