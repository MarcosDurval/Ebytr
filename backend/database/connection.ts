import mongoose from 'mongoose';

const db = process.env.URI || 'mongodb://localhost:27017/Ebytr';

const connect = async () => {
  mongoose.connect(db);
};

export default connect;
