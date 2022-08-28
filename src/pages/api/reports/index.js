import dbHandler from '../../../../lib/db_handler';
import Report from '../../../../models/report';

// Accessible at api/reports
export async function handler(_req, res) {
  let response;
  try {
    response = await Report.find()
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default dbHandler(handler);
