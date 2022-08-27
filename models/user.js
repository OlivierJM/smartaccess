import mongoose from 'mongoose'
const Schema = mongoose.Schema

// To be extended with a proper user schema
const user = new Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.models = {}

const User = mongoose.model('User', user)

export default User