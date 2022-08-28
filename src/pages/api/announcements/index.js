import dbHandler from '../../../../lib/db_handler';
import Announcement from '../../../../models/announcement';

// Accessible at api/announcements
export async function handler(_req, res) {
  let response;
  try {
    response = await Announcement.find({}).sort({ createdAt: 1 })
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export default dbHandler(handler);
