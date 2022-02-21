import { MongoClient } from 'mongodb';
import { Response } from 'express';
import { mongoDBConfig } from '../config/mongoDB.config';
import { ICRUD } from '../interfaces/ICRUD';

export class MongoDBController implements ICRUD {
  private connection;

  constructor() {
    this.connect();
  }

  public connect() {
    const { password, name } = mongoDBConfig;
    const url = `mongodb+srv://Project_2:${password}@project2.ofsq7.mongodb.net/${name}?retryWrites=true&w=majority`;
    MongoClient.connect(url)
      .then((db) => {
        this.connection = db.db('Project2');
      })
      .catch((err) => {
        throw err;
      });
  }

  // private connectTables() {
  //   this.person = this.connection.collection('person');
  //   this.user = this.connection.collection('user');
  // }

  public dropConnection() {
    this.connection.dropConnection();
  }

  read(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('person')
      .find(execute)
      .toArray()
      .then((result) => result)
      .catch(() => false);
  }

  clear(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('person')
      .deleteMany(execute)
      .then((result) => result)
      .catch(() => false);
  }

  create(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('person')
      .insertOne(execute)
      .then((result) => result)
      .catch(() => false);
  }

  delete(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('person')
      .deleteOne(execute)
      .then((result) => result)
      .catch(() => false);
  }

  update(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('person')
      .updateOne(execute[0], execute[1])
      .then((result) => result)
      .catch(() => false);
  }

  readUser(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('user')
      .findOne(execute)
      .then((result) => result)
      .catch(() => false);
  }

  createUser(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('user')
      .insertOne(execute)
      .then((result) => result)
      .catch(() => false);
  }

  updateUser(query: string) {
    const execute = JSON.parse(query);
    return this.connection
      .collection('user')
      .updateOne(execute[0], execute[1])
      .then((result) => result)
      .catch(() => false);
  }
}
