const mongoose = require('./connection')


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  pin: {
    type: Number,
    required: true,
    maxlength: 4,
    minlength: 3
  }
})


const User = mongoose.model('User', UserSchema)



module.exports = User
