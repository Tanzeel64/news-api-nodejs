import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routes } from './src/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
