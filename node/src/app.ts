import express from 'express';
const app = express();

import todoRoutes from './routes/todos';

app.use(express.json());

app.use('/todos', todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(1235);
