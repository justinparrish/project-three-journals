const express = require('express')
const Note = require('../models/note')
const router = express.Router()


router.route('/').get((req, res) => {
  Note.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').post((req, res) => {
  const title = req.body.title
  const note = req.body.note

  const newNote = new Note({ title, note })

  newNote.save()
    .then(() => res.json('Note Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/edit/:id').put((req,res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.title = req.body.title
      note.note = req.body.note

      note.save()
        .then(() => res.json('Note Updated'))
        .catch(err => res.send(400).json('Error: ' + err))
    })
})

router.route('/delete/:id').delete((req,res) => {
  Note.findByIdAndRemove(req.params.id)
    .then(() => res.json('Note Deleted'))
    .catch(err => res.send(400).json('Error: ' + err))
})


module.exports = router
