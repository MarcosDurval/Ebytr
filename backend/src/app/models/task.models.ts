import taskModel from '../../../database/model';

export const findAll = async ():Promise<ItaskId[] | null> => taskModel.find();

export const findOne = async (id:ItaskId['id']):Promise<ItaskId | null> => taskModel.findOne({ _id: id });

export const create = async (body:IcreateTask):Promise<ItaskId | null> => taskModel.create(body);

export const update = async (id:ItaskId['id'], body:ItaskId) => taskModel.updateOne({ _id: id }, { ...body });

export const destroy = async (id:ItaskId['id']) => taskModel.deleteOne({ _id: id });
