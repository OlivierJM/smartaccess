import dbHandler from '../../../../lib/db_handler';
import AccessLog from '../../../../models/accesslog';

// Accessible at api/accesslogs
export async function handler(_req, res) {
  let response;
  try {
    response = await AccessLog.find({}).sort({ createdAt: 1 })
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default dbHandler(handler);
