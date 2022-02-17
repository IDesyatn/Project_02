import { MongoClient } from 'mongodb';
import { Request, Response } from 'express';
import { mongoDBConfig } from '../config/mongoDB.config';
import { ICRUD } from '../interfaces/ICRUD';

export class MongoDBController implements ICRUD {
  private connection;

  private person;

  constructor() {
    this.connect();
  }

  public connect() {
    const { password, name } = mongoDBConfig;
    const url = `mongodb+srv://Project_2:${password}@project2.ofsq7.mongodb.net/${name}?retryWrites=true&w=majority`;
    MongoClient.connect(url)
      .then((db) => {
        this.connection = db;
        this.connection.collection('person');
      })
      .catch((err) => {
        throw new Error(`Error during mongoDB connection: ${err.message}`);
      });
  }

  public dropConnection() {
    this.connection.dropConnection();
  }

  clear(req: Request, res: Response): void {
    this.person
      .deleteMany({})
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  create(req: Request, res: Response): void {
    const { firstName, lastName, age, phoneNumber, email, city, company } = req.body;
    this.person
      .insertOne({ firstName, lastName, age, phoneNumber, email, city, company })
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  delete(req: Request, res: Response): void {
    const { id } = req.body;
    this.person
      .deleteOne({
        _id: id,
      })
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  read(req: Request, res: Response): void {
    this.person
      .find({})
      .then((result) => {
        res.status(200).json(JSON.stringify(result));
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  update(req: Request, res: Response): void {
    const { id, firstName, lastName, age, phoneNumber, email, city, company } = req.body;
    this.person
      .updateOne(
        { _id: id },
        {
          $set: {
            firstName,
            lastName,
            age,
            phoneNumber,
            email,
            city,
            company,
          }
        }
      )
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }
}
