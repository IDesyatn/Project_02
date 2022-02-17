import { Request, Response } from 'express';
import { MySQLController } from '../controllers/MySQL.controller';
import { MongoDBController } from '../controllers/MongoDB.controller';
import { ICRUD } from '../interfaces/ICRUD';
import { ValidationService } from './Validation.service';

export class DatabaseService implements ICRUD {
  private mySql: MySQLController;

  private mongoDB: MongoDBController;

  private validator: ValidationService;

  constructor() {
    this.mySql = new MySQLController();
    this.mongoDB = new MongoDBController();
    this.validator = new ValidationService();
  }

  clear(req: Request, res: Response): void {
    this.validator.refresh(req, res).validateDatabase().refresh();
    if (!res.status) {
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          this.mySql.clear(req, res);
          break;
        case 'mongoDB':
          this.mongoDB.clear(req, res);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  create(req: Request, res: Response): void {
    this.validator.refresh(req, res).validate().refresh();
    if (!res.status) {
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          this.mySql.create(req, res);
          break;
        case 'mongoDB':
          this.mongoDB.create(req, res);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  delete(req: Request, res: Response): void {
    this.validator.refresh(req, res).validateId().validateDatabase().refresh();
    if (!res.status) {
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          this.mySql.delete(req, res);
          break;
        case 'mongoDB':
          this.mongoDB.delete(req, res);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  read(req: Request, res: Response): void {
    this.validator.refresh(req, res).validateDatabase().refresh();
    if (!res.status) {
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          this.mySql.read(req, res);
          break;
        case 'mongoDB':
          this.mongoDB.read(req, res);
          break;
        default:
          res.status(409).end();
      }
    }
  }

  update(req: Request, res: Response): void {
    this.validator.refresh(req, res).validateId().validate().refresh();
    if (!res.status) {
      const { db } = req.body;
      switch (db) {
        case 'mySql':
          this.mySql.update(req, res);
          break;
        case 'mongoDB':
          this.mongoDB.update(req, res);
          break;
        default:
          res.status(409).end();
      }
    }
  }
}
