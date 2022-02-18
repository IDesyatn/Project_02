import mysql from 'mysql2';
import { Response } from 'express';
import { mySQLConfig } from '../config/mySQL.config';

export class MySQLController {
  private connection;

  constructor() {
    this.connect();
  }

  public connect() {
    this.connection = mysql.createConnection(mySQLConfig).promise();
  }

  public dropConnection() {
    this.connection.dropConnection();
  }

  execute(query: string, res: Response): void {
    this.connection
      .query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  executeWithResponseData(query: string, res: Response): void {
    this.connection
      .query(query)
      .then((result) => {
        res.status(200).json(JSON.stringify(result));
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }
}
