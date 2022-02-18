import express from 'express';
import { applicationConfig } from '../config/application.config';

export class ApplicationView {
  private app: express.Application;

  private config;

  constructor() {
    this.app = express();
    this.config = applicationConfig;
  }

  public setMiddleware(middleware: express.Handler) {
    this.app.use(middleware);
  }

  public run() {
    this.app.listen(this.config.port, this.config.host, () => {
      console.log(
        `Server is up on Host: ${this.config.host}, Port: ${this.config.port}, PID: ${process.pid}`,
      );
    });
  }
}
