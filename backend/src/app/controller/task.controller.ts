import * as service from '../services/task.services';
import isValidTask from './validInput/validTask';

export const findAll = async () => service.findAll();

export const findOne = async (id:ItaskId['id']) => service.findOne(id);

export const create = async (body:IcreateTask) => {
  await isValidTask(body);
  return service.create(body);
};

export const update = async (id:ItaskId['id'], body:ItaskId) => service.update(id, body);
