import { Request, Response } from 'express';

export interface ICRUD {
  create(req: Request, res: Response): void;
  read(req: Request, res: Response): void;
  update(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
  clear(req: Request, res: Response): void;
}
