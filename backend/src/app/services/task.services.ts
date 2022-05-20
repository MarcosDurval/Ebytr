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

export const update = async (id:ItaskId['id'], body:ItaskId) => {
  const task = await models.findOne(id);
  if (!task) {
    throw new Error('404/task not found');
  }
  models.update(id, body);
};

export const destroy = async (id:ItaskId['id']) => models.destroy(id);
