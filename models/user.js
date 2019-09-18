const mongoose = require('./connection.js')


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  pin: {
    type: String,
    required: true,
    unique: true,
    maxlength: 4
  }
})


const UserCollection = mongoose.model('User', UserSchema)


const getUsers = () => UserCollection.find()

const addUser = (newUser) => UserCollection.insertMany([newUser])

const getUser = (id) => UserCollection.findById(id)


module.exports = {
  addUser,
  getUser,
  getUsers
}
