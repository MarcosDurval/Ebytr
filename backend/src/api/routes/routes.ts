import { Router } from 'express';

const routerTask = Router();

routerTask.get('/');

routerTask.get('/:id');

routerTask.post('/');

routerTask.patch('/:id');

export default routerTask;
