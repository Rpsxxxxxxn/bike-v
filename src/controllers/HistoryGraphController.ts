import { Request, Response } from "express";
import IHistoryGraphRepository from "../domains/repositories/IHistoryGraphRepository";
import HistoryGraphRepositoryImpl from "../infrastructures/databases/HistoryGraphRepositoryImpl";

export default class HistoryGraphController {
  private static PAGE_ID = 'historyGraph';
  private static TITLE = 'グラフ表示';
  private historyGraphRepository: IHistoryGraphRepository = HistoryGraphRepositoryImpl.create();
  private constructor() {}

  public async index(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'historyGraph',
      page_id: HistoryGraphController.PAGE_ID,
      title: HistoryGraphController.TITLE,
      params: {
        dataList: await this.historyGraphRepository.getAllByUserId((req.session as any).user.id)
      }
    });
  }

  public async getDataList(req: Request, res: Response) {
    res.send(await this.historyGraphRepository.getAllByUserId((req.session as any).user.id));
  }

  static create() {
    return new HistoryGraphController();
  }
}