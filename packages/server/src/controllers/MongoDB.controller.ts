import { MongoClient } from 'mongodb';
import { Response } from 'express';
import { mongoDBConfig } from '../config/mongoDB.config';
import { ICRUD } from '../interfaces/ICRUD';

export class MongoDBController implements ICRUD {
  private connection;

  private person;

  private user;

  constructor() {
    this.connect();
  }

  public connect() {
    const { password, name } = mongoDBConfig;
    const url = `mongodb+srv://Project_2:${password}@project2.ofsq7.mongodb.net/${name}?retryWrites=true&w=majority`;
    MongoClient.connect(url)
      .then((db) => {
        this.connection = db.db('Project2');
        // this.person = this.connection.colleSction('person');
        // this.user = this.connection.collection('user');
      })
      .then(() => {
        this.connectTables();
      })
      .catch((err) => {
        throw err;
      });
  }

  private connectTables() {
    this.person = this.connection.collection('person');
    this.user = this.connection.collection('user');
  }

  public dropConnection() {
    this.connection.dropConnection();
  }

  clear(query: string, res: Response): void {
    const execute = JSON.parse(query);
    return this.person
      .deleteMany(execute)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  create(query: string, res: Response): void {
    const execute = JSON.parse(query);
    this.person
      .insertOne(execute)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  delete(query: string, res: Response): void {
    const execute = JSON.parse(query);
    this.person
      .deleteOne(execute)
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  read(query: string, res: Response): void {
    const execute = JSON.parse(query);
    this.person
      .find(execute)
      .then((result) => {
        res.status(200).json(JSON.stringify(result));
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  update(query: string, res: Response): void {
    const execute = JSON.parse(query);
    this.person
      .updateOne(execute[0], execute[1])
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        res.status(409).json(JSON.stringify(err));
      });
  }

  // Костыльный костыль. Бег по граблям. Переделать впадло, времени нет
  readUser(query: string) {
    const execute = JSON.parse(query);
    return this.user
      .findOne(execute)
      .then((result) => {
        return result;
      })
      .catch(() => {
        return false;
      });
  }

  createUser(query: string) {
    const execute = JSON.parse(query);
    return this.user
      .insertOne(execute)
      .then((result) => {
        return result;
      })
      .catch(() => {
        return false;
      });
  }

  updateUser(query: string) {
    const execute = JSON.parse(query);
    return this.user
      .updateOne(execute[0], execute[1])
      .then((result) => {
        return result;
      })
      .catch(() => {
        return false;
      });
  }
}
