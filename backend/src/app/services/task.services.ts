import * as models from '../models/task.models';

export const findAll = async () => models.findAll();

export const findOne = async (id:ItaskId['id']) => models.findOne(id);

export const create = async (body:createTask) => models.create(body);
