import { Router, Request, Response } from 'express';
import * as controller from '../../app/controller/task.controller';

const routerTask = Router();

routerTask.get('/', async (req:Request, res:Response) => {
  const allTasks = await controller.findAll();
  return res.status(200).json(allTasks);
});

routerTask.get('/:id');

routerTask.post('/');

routerTask.patch('/:id');

export default routerTask;
