const express = require('express')
const userApi = require('../models/user.js')
const userRouter = express.Router()




userRouter.post('/', (req, res) => {
  res.send(userApi.addUser())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
