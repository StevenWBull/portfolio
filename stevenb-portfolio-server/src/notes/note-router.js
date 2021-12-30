const express = require("express");

const noteRouter = express.Router();
const jsonBodyParser = express.json();

noteRouter
    .get((req, res, next) => {
        let success = 'Success with getting notes!'

        res.status(200).json(success);
    })

module.exports = noteRouter;