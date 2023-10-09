import { Axios } from 'axios';
import 'dotenv/config';

export class NewsService {
  private axiosInstace: Axios;
  private baseURL = 'https://api.nytimes.com/svc/topstories/v2/';
  private apiKey: string | undefined;

  constructor() {
    this.axiosInstace = new Axios({ baseURL: this.baseURL });
    this.apiKey = process.env.APP_KEY;
  }

  public async getTopNews({ newsType }: { newsType: string }) {
    try {
      const response = await this.axiosInstace.get(
        `${newsType || 'world'}.json?api-key=${this.apiKey}`
      );
      return response?.data;
    } catch (err) {
      throw new Error(`Error while getting top  ${JSON.stringify(err)}`);
    }
  }
}
