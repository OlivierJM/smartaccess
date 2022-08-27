import mongoose from 'mongoose';

// This will only be used for api calls, while the other connection is specifically for next-auth
const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  };
  // Use new db connection
  await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  return handler(req, res);
};

export default connectDB;