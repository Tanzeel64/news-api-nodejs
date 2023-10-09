import express from 'express';
import { NewsRoutes } from './News';

export const routes = express.Router();

routes.use(NewsRoutes);
