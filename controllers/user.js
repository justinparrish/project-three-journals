const express = require('express')
const userApi = require('../models/user.js')
const userRouter = express.Router()


userRouter.get('/', (req, res) => {
  res.send(userApi.getUsers())
})

userRouter.post('/', (req, res) => {
  res.send(userApi.addUser(req.body))
})


module.exports = {
  userRouter
}
