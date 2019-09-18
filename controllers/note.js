const express = require('express')
const Note = require('../models/note')
const router = express.Router()


router.route('/').get((req,res) => {
    Note.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err))
  })

module.exports = Note
