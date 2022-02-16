import { MongoClient } from 'mongodb';
import { MongoDBConfig } from './MongoDBConfig';
import { mongoDBConfig } from '../configurations/envData';

export class MongoDB {
  private url: string;

  private client: MongoClient;

  private connection;

  private person;

  constructor() {
    this.url = new MongoDBConfig().getConfig();
  }

  public createConnection = () => {
    this.client = new MongoClient(this.url);
  };

  public connect = () => {
    this.client.connect((error, result) => {
      if (error) {
        throw new Error('Error during mongoDB connection');
      }
      this.connection = result.db(mongoDBConfig.name);
      this.person = this.connection.collection('person');
    });
  };

  public create(config) {
    return new Promise((resolve, reject) => {
      resolve(
        this.person.insertOne({
          firstName: config.firstName,
          lastName: config.lastName,
          phoneNumber: config.phoneNumber,
          email: config.email,
          city: config.city,
          company: config.company,
        }),
      );
    });
  }

  public delete(config) {
    return new Promise((resolve, reject) => {
      resolve(
        this.person.deleteOne({
          _id: config.id,
        }),
      );
    });
  }

  public clear() {
    return new Promise((resolve, reject) => {
      resolve(this.person.deleteMany({}));
    });
  }

  public read() {
    return new Promise((resolve, reject) => {
      resolve(this.person.find({}));
    });
  }

  public update(config) {
    return new Promise((resolve, reject) => {
      resolve(
        this.person.updateOne(
          { _id: config.id },
          {
            $set: {
              firstName: config.firstName,
              lastName: config.lastName,
              phoneNumber: config.phoneNumber,
              email: config.email,
              city: config.city,
              company: config.company,
            },
          },
        ),
      );
    });
  }
}
