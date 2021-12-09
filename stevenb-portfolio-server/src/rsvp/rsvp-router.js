const express = require("express");

const rsvpRouter = express.Router();
const jsonBodyParser = express.json();

rsvpRouter.use('/')
    .get(jsonBodyParser, (req, res, next) => {
        let success = 'Success with getting rsvp!'

        res.status(200).json(success);
    })

module.exports = rsvpRouter;