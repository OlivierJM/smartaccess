import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// To be extended with a proper accesslog schema
const accesslog = new Schema({
  // mostly useful for manual entries
  name: {
    type: String,
    required: true,
  },
  communityId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  visitationDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: false,
  },
  visitationTime: {
    type: Date,
    required: true,
  },
  expiryTime: {
    type: Date,
    required: false,
  },
  entryTime: {
    type: Date,
    required: false,
  },
  exitTime: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    enum: ['active', 'cancelled'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {};

const AccessLog = mongoose.model('AccessLog', accesslog);

export default AccessLog;
