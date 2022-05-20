import * as models from '../models/task.models';

export const findAll = async () => models.findAll();

export const findOne = async (id:ItaskId['id']) => {
  const task = await models.findOne(id);
  if (!task) {
    throw new Error('404/task not found');
  }
  return task;
};

export const create = async (body:IcreateTask) => models.create(body);
