import { Router, Request, Response } from 'express';
import * as controller from '../../app/controller/task.controller';

const routerTask = Router();

routerTask.get('/', async (_req:Request, res:Response) => {
  const allTasks = await controller.findAll();
  return res.status(200).json(allTasks);
});

routerTask.get('/:id', async (req:Request, res:Response) => {
  const { id } = req.params;
  const task = await controller.findOne(id);
  return res.status(200).json(task);
});

routerTask.post('/', async (req:Request, res:Response) => {
  await controller.create(req.body);
  return res.status(201).end();
});

routerTask.patch('/:id');

export default routerTask;
