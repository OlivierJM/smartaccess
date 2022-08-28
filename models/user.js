import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// To be extended with a proper user schema
const user = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
  alternativeNumber: {
    type: String,
    unique: true,
    required: true,
  },
  communityId: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: 'visitor',
    enum: ['visitor', 'resident', 'guest', 'admin'],
  },
  dob: Date,
  imageUrl: String,
  status: {
    type: String,
    default: 'pending',
    enum: ['active', 'inactive', 'pending'],
  },
  gender: {
    enum: ['male', 'female', 'other'],
    type: String
  },
  // Re-visit this
  theme: {
    type: String,
    enum: ['light', 'night'],
  }
});

mongoose.models = {};

const User = mongoose.model('User', user);

export default User;
