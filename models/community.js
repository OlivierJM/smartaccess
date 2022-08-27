import mongoose from 'mongoose'
const Schema = mongoose.Schema

// To be extended with a proper Community schema
const community = new Schema({
  name: {
    type: String,
    required: true
  },
  supportEmail: String,
  supportPhoneNumber: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.models = {}

const Community = mongoose.model('Community', community)

export default Community