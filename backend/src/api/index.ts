import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes/routes';
import erros from './middleware/erros';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/task', routes);

app.use(erros);

export default app;
