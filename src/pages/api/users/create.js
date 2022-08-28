import connectDB from '../../../../lib/db_handler';
import User from '../../../../models/user';

const handler = async (req, res) => {
  const { name, email, phoneNumber, alternativeNumber, role, dob, gender } = req.body;
  try {
    const user = new User({
      name,
      email,
      phoneNumber,
      alternativeNumber,
      role,
      dob,
      gender,
      createdAt: new Date(),
    });
    const response = user.save();
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send({error: error.message});
  }
};

export default connectDB(handler);
