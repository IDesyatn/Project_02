import mysql from 'mysql2';
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

  execute(query: string) {
    return this.connection
      .query(query)
      .then((result) => result)
      .catch((err) => err);
  }
}
