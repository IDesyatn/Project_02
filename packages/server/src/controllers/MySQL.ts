import mysql from 'mysql';
import { mySqlConfig } from '../configurations/envData';
import { MySqlConfig } from './MySqlConfig';

export class MySQL {
  private config: mysql.ConnectionConfig;

  private connection: mysql.Connection;

  constructor() {
    this.config = new MySqlConfig(
      mySqlConfig.name,
      mySqlConfig.password,
      mySqlConfig.host,
      mySqlConfig.user,
    ).getConfig();
  }

  private createConnection = () =>
    new Promise((resolve) => {
      resolve((this.connection = mysql.createConnection(this.config)));
    });

  private connect = () => {
    this.connection.connect();
  };

  private dropConnection = () => {
    this.connection.end();
  };

  public create(config) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `INSERT INTO persons (FirstName, LastName, Age, PhoneNumber, Email, City, Company)
      VALUES (${config.firstName}, ${config.lastName}, ${config.age}, ${config.phoneNumber}, ${config.email}, ${config.city}, ${config.company})`,
        (err: Error, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
  }

  public delete(config) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `DELETE FROM person,
      WHERE id = ${config.id}`,
        (err: Error, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
  }

  public clear() {
    return new Promise((resolve, reject) => {
      this.connection.query(`TRUNCATE TABLE person`, (err: Error, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  public read() {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM person`, (err: Error, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.stringify(result));
        }
      });
    }).then();
  }

  public update(config) {
    return new Promise((resolve, reject) => {
      this.connection.query(
        `UPDATE person
      SET
      FirstName = ${config.firstName},
      LastName = ${config.lastName},
      Age = ${config.age},
      PhoneNumber = ${config.phoneNumber},
      Email = ${config.email},
      City = ${config.city},
      Company = ${config.company},
      WHERE id = ${config.id}`,
        (err: Error, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        },
      );
    });
  }
}
