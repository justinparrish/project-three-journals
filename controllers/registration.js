const express = require('express')
const Registration = require('../models/registration.js')
const router = express.Router()

router.route('/').get((req, res) => {
  Registration.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/').post((req, res) => {
  const name = req.body.name
  const age = Number(req.body.age)
  const state = req.body.state
  const email = req.body.email

  const newRegister = new Registration({ name, age, state, email })

  newRegister.save()
    .then(() => res.json('Successfully Registered'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('edit/:id').put((req, res) => {
  Registration.findById(req.params.id)
    .then(register => {
      register.name = req.body.name
      register.age = Number(req.body.age)
      register.state = req.body.state
      register.email = req.body.email

      register.save()
        .then(() => res.json('Registration Update'))
        .catch(err => res.send(400).json('Error: ' + err))
    })

})


module.exports = router