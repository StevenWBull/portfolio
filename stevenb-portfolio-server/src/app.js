require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const rsvpRouter = require("./rsvp/rsvp-router");
const noteRouter = require("./notes/note-router");

const app = express();

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/rsvp', rsvpRouter);
// app.use('/api/note', noteRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!')
});

module.exports = app;