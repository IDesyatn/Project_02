import express, { Application, RequestHandler } from 'express';
import path from 'path';
import { Methods } from './Methods';

export class App {
  private app: Application = express();

  private PORT: number = Number.parseInt(process.env.PORT, 10) || 3000;

  public setStatic = (directory: string): void => {
    this.app.use(express.static(path.resolve(__dirname, directory)));
  };

  public setRoute = (method: Methods, url: string, handler: RequestHandler): void => {
    if (Methods[method] === 'GET') {
      this.app.get(url, handler);
    } else if (Methods[method] === 'POST') {
      this.app.post(url, handler);
    } else if (Methods[method] === 'PUT') {
      this.app.put(url, handler);
    } else if (Methods[method] === 'DELETE') {
      this.app.delete(url, handler);
    }
  };

  public setMiddleware = (middleware): void => {
    this.app.use(middleware);
  };
}