import mongoose from 'mongoose'
const Schema = mongoose.Schema

// To be extended with a proper Announcement schema
const announcement = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  target: {
    type: [String],
    default: ['resident'],
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
//  associations
  author: { type: Schema.Types.ObjectId, ref: 'User' },
//   users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

mongoose.models = {}

const Announcement = mongoose.model('Announcement', announcement)

export default Announcement