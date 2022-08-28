import mongoose from 'mongoose'
const Schema = mongoose.Schema

// To be extended with a proper Report schema
const report = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Associations
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  assignee: { type: Schema.Types.ObjectId, ref: 'User' },
  community: { type: Schema.Types.ObjectId, ref: 'Community' },
})

mongoose.models = {}

const Report = mongoose.model('Report', report)

export default Report