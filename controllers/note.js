const express = require('express')
const Note = require('../models/note')
const router = express.Router()


router.route('/').get((req, res) => {
  Note.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').get((req, res) => {
  const title = req.body.title
  const note = req.body.note

  const newNote = new Note({ title, note })

  newNote.save()
    .then(() => res.json('Note Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
