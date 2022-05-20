import mongoose from 'mongoose';

const { Schema } = mongoose;

const tasksSchema = new Schema<ItaskId>({
  task: String,
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'pendente' },
}, { versionKey: false });

export default tasksSchema;
