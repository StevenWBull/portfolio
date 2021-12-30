const express = require("express");
const bodyParser = require('body-parser');
const fs = require('fs');

const rsvpRouter = express.Router();
const jsonBodyParser = bodyParser.json();

rsvpRouter
    .route('/')
    .post(jsonBodyParser, (req, res) => {
        try {
            let data = JSON.stringify(req.body, null, 2);
            fs.writeFileSync('./rsvp.json', data);
            return res.status(201).json({ message: 'success' });
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    })

module.exports = rsvpRouter;