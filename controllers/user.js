const express = require('express')
const userApi = require('../models/user.js')
const userRouter = express.Router()


userRouter.get('/', (req, res) => {
  res.send(userApi.getUsers())
})

userRouter.post('/', (req, res) => {
  userApi.addUser(req.body)
    .then(() => res.send(200))
})


module.exports = {
  userRouter
}
