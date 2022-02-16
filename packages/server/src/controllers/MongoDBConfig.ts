import { mongoDBConfig } from '../configurations/envData';

export class MongoDBConfig {
  private url: string;

  private password: string;

  private database: string;

  constructor() {
    this.database = mongoDBConfig.name;
    this.password = mongoDBConfig.password;
  }

  public getConfig = () => {
    this.url = `mongodb+srv://Project_2:${this.password}@project2.ofsq7.mongodb.net/${this.url}?retryWrites=true&w=majority`;
    return this.url;
  };
}
