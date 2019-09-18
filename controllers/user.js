const express = require('express')
const User = require('../models/user.js')
const router = express.Router()

router.route('/').get((req,res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})



module.exports = User