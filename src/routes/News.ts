import { Router } from 'express';
import { NewsController } from '../controllers';

export const NewsRoutes = Router();
const newsController = new NewsController();

NewsRoutes.get('/topnews/:type', (req, res) =>
  newsController.getTopNews(req, res)
);
