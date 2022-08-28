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
  createdBy: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.models = {};

const AccessLog = mongoose.model('AccessLog', accesslog);

export default AccessLog;
