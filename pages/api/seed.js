import User from '../../models/User';
import db from '../../utils/db';
import data from '../../utils/data';

export default async function handler(req, res) {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  db.disconnect();
  res.send({ message: 'seeded successfully' });
}
