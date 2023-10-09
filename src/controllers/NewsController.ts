import { Request, Response } from 'express';
import { NewsService } from '../services';

export class NewsController {
  private newsService: NewsService;

  constructor() {
    this.newsService = new NewsService();
  }

  public async getTopNews(req: Request, res: Response) {
    const { type } = req.params;
    const response = await this.newsService.getTopNews({ newsType: type });
    return res.status(200).send(response);
  }
}
