const express = require('express')
const User = require('../models/user.js')
const router = express.Router()

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
        console.log(users)
});

router.route('/add').post((req, res) => {
  const username = req.body.username
  const pin = req.body.pin

  const newUser = new User({ username, pin })

  newUser.save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/edit/:id').put((req,res) => {
    User.findById(req.params.id)
      .then(user => {
        user.username =req.body.username;
        user.pin = req.body.pin;

        user.save()
          .then(() => res.json('User Updated'))
          .catch(err => res.send(400).json('Error: ' + err))
      })
})

module.exports = router