import mongoose from 'mongoose';
import tasksSchema from './schema';

const { model } = mongoose;

const taskModel = model('tasks', tasksSchema);

export default taskModel;
