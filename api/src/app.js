const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index.js');
require('./db.js');

const server = express();

server.name = 'API';

server.use(express.json());

server.use(morgan('dev'));

server.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization'],
  }),
);

server.use('/', router);

module.exports = server;