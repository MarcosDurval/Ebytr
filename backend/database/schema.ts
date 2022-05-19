import mongoose from 'mongoose';

const { Schema } = mongoose;

const tasksSchema = new Schema<ItaskId>({
  task: String,
  date: { type: Date, default: Date.now },
  author: String,
  title: String,
  status: { type: String, default: 'Pendente' },
}, { versionKey: false });

export default tasksSchema;
