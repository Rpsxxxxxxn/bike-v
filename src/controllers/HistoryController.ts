import { Request, Response } from "express";
import History from "./forms/History";

export default class HistoryController {
  private constructor() {}

  public get(req: Request, res: Response) {
    res.render('history', { title: 'History' });
  }

  public update(req: Request, res: Response) {
  }

  public delete(req: Request, res: Response) {
  }

  static create() {
    return new HistoryController();
  }
}