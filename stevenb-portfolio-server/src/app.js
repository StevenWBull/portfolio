require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const rsvpRouter = require("./rsvp/rsvp-router");
const noteRouter = require("./note/note-router");

const app = express();

const morganOption = (process.env.NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // limit each IP to 1 requests per windowMs
})

app.use(limiter);
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/rsvp', rsvpRouter);
app.use('/api/note', noteRouter);

app.get('/', (req, res) => {
    res.send('Hello, world!')
});

module.exports = app;