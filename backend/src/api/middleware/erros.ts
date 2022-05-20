import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const erros:ErrorRequestHandler = async (err, _req, res, _next) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues[0].message });
  }
  const [code, message] = err.message.split('/');
  if (code && message) {
    return res.status(code).json({ message });
  }
  return res.status(500).json({ message: 'inesperado' });
};

export default erros;
