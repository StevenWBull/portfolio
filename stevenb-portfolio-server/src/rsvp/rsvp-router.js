const express = require("express");
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
require('dotenv').config();
const fs = require('fs');

const rsvpRouter = express.Router();
const jsonBodyParser = bodyParser.json();

rsvpRouter
    .route('/')
    .post(jsonBodyParser, (req, res) => {
        try {
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'stevin.bull@gmail.com',
                pass: process.env.GMAIL_PASS
              }
            });
            
            const mailOptions = {
              from: 'stevin.bull@gmail.com',
              to: 'stevin.bull@gmail.com',
              subject: 'RSVP ANA BABY SHOWER',
              text: JSON.stringify(req.body, null, 4)
            };
            
            transporter.sendMail(mailOptions, function(error, info) {
              if (error) {
                    console.error(error);
                    return res.status(400).json({ message: error.message })
              } else {
                    console.log('Email sent: ' + info.response);
                    return res.status(201).json({ message: 'success' })
              }
            });
        } catch (e) {
            return res.status(400).json({ message: e.message })
        }
    })

module.exports = rsvpRouter;