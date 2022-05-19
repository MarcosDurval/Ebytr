import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/task', routes);

export default app;
