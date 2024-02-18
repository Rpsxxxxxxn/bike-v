import { Request, Response } from "express";
import IHistoryRepository from "../domains/repositories/IHistoryRepository";
import HistoryRepositoryImpl from "../infrastructures/databases/HistoryRepositoryImpl";
import HistoryForm from "./forms/HistoryForm";
import HistoryValidator from "./forms/validators/HistoryValidator";

export default class HistoryController {
  private historyRepository: IHistoryRepository = HistoryRepositoryImpl.create();
  private static PAGE_ID = 'history';
  private static TITLE = 'メンテナンス記録';

  private constructor() {}

  public async get(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'history',
      page_id: HistoryController.PAGE_ID,
      title: HistoryController.TITLE,
      params: {
        dataList: await this.historyRepository.get()
      }
    });
  }

  public async update(req: Request, res: Response) {
    const form: HistoryForm = req.body;
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