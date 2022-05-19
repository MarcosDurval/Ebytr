import mongoose from 'mongoose';

const { Schema } = mongoose;

const tasksSchema = new Schema({
  task: String,
  date: { type: Date, default: Date.now },
});

export default tasksSchema;
