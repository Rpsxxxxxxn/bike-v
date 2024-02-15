import { Request, Response } from "express";
import IHistoryRepository from "../domains/repositories/IHistoryRepository";
import HistoryRepositoryImpl from "../infrastructures/databases/HistoryRepositoryImpl";
import History from "./forms/History";
import HistoryValidator from "./validators/HistoryValidator";

export default class HistoryController {
  private historyRepository: IHistoryRepository = HistoryRepositoryImpl.create();
  private static PAGE_ID = 'history';
  private static TITLE = '走行履歴';

  private constructor() {}

  public async get(req: Request, res: Response) {
    const dataList = await this.historyRepository.get();
    res.render('layout', {
      layout_name: 'history',
      page_id: HistoryController.PAGE_ID,
      title: HistoryController.TITLE,
      params: { dataList }
    });
  }

  public async update(req: Request, res: Response) {
    const form: History = req.body;
    if (HistoryValidator.create(form).isInvalid()) {
      res.redirect('/history');
    }
    await this.historyRepository.update(form);
    res.redirect('/history');
  }

  public async delete(req: Request, res: Response) {
    res.redirect('/history');
  }

  static create() {
    return new HistoryController();
  }
}