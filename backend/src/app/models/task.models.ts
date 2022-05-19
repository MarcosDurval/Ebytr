import taskModel from '../../../database/model';

export const findAll = async () => taskModel.find();

export const findOne = async (id:ItaskId['id']) => taskModel.findOne({ _id: id });

export const create = async (body:createTask) => taskModel.create(body);
