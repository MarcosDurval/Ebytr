import mongoose from 'mongoose';
import 'dotenv/config';

const db = process.env.URI || '';

const connect = async () => {
  mongoose.connect(db);
};

export default connect;
