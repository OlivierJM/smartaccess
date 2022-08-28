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
  },
  // Associations
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  accesslogs: [{ type: Schema.Types.ObjectId, ref: 'AccessLog' }],
  announcements: [{ type: Schema.Types.ObjectId, ref: 'Announcement' }],
})

mongoose.models = {}

const Community = mongoose.model('Community', community)

export default Community