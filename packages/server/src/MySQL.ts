import mysql from 'mysql';
import { ICRUD } from './ICRUD';

export class MySQL implements ICRUD {
  private name: string = process.env.MY_SQL_DB_NAME;

  private password: string = process.env.MY_SQL_DB_PASSWORD;

  private host: string = process.env.MY_SQL_DB_HOST || 'localhost';

  private user: string = process.env.MY_SQL_DB_USER || 'root';

  private connection = null;

  private createConnection = () =>
    new Promise((resolve) => {
      resolve(
        mysql.createConnection({
          host: this.host,
          user: this.user,
          password: this.password,
          database: this.name,
        }),
      );
    });

  private connect = () => {
    if (!this.connection) {
      this.connection = this.connection().then((res) => {
        res.connect((err) => {
          if (err) {
            this.dropConnection();
            throw err;
          }
          // console.log(res.state, 'connected');
        });
      });
    }
  };

  private dropConnection = () => {
    if (this.connection) {
      this.connection.then((res) => {
        res.end();
        // console.log(res.state, 'connection dropped');
      });
      this.connection = null;
    }
  };

  // CRUD interface
  // TODO create CRUD operations for mySQL
  create(query: string): void {

  }

  delete(query: string): void {
  }

  read(query: string, params: object): JSON {
    return undefined;
  }

  update(query: string): void {
  }
}
