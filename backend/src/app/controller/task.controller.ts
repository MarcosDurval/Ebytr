import * as service from '../services/task.services';

export const findAll = async () => service.findAll();

export const findOne = async (id:ItaskId['id']) => service.findOne(id);

export const create = async (body:IcreateTask) => service.create(body);
