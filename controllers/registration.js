const express = require('express')
const Registration = require('../models/registration')
const router = express.Router()

router.route('/').get((req,res) => {
    Registration.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err))
  })


module.exports = Registration