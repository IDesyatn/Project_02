import mysql from 'mysql2';
import { Request, Response } from 'express';
import { mySQLConfig } from '../config/mySQL.config';
import { ICRUD } from '../interfaces/ICRUD';

export class MySQLController implements ICRUD {
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

  clear(req: Request, res: Response): void {
    const query = 'TRUNCATE TABLE person;';
    this.connection
      .query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  create(req: Request, res: Response): void {
    const { firstName, lastName, age, phoneNumber, email, city, company } = req.body;
    const query = `INSERT INTO person (FirstName, LastName, Age, PhoneNumber, Email, City, Company)
    VALUES(${firstName}, ${lastName}, ${age}, ${phoneNumber}, ${email}, ${city}, ${company});`;

    this.connection
      .query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  delete(req: Request, res: Response): void {
    const { id } = req.body;
    const query = `DELETE FROM person
    WHERE Id = ${id};`;

    this.connection
      .query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  read(req: Request, res: Response): void {
    const query = `SELECT * FROM person;`;

    this.connection
      .query(query)
      .then((result) => {
        res.status(200).json(JSON.stringify(result));
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  update(req: Request, res: Response): void {
    const { id, firstName, lastName, age, phoneNumber, email, city, company } = req.body;
    const query = `UPDATE person
    SET
    FirstName = ${firstName},
    LastName = ${lastName},
    Age = ${age},
    PhoneNumber = ${phoneNumber},
    Email = ${email},
    City = ${city},
    Company = ${company},
    WHERE Id = ${id};`;

    this.connection
      .query(query)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }
}
