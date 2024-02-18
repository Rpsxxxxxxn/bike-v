import { Request, Response } from "express";
import IHistoryGraphRepository from "../domains/repositories/IHistoryGraphRepository";
import HistoryGraphRepositoryImpl from "../infrastructures/databases/HistoryGraphRepositoryImpl";

export default class HistoryGraphController {
  private static PAGE_ID = 'historyGraph';
  private static TITLE = 'グラフ表示';
  private historyGraphRepository: IHistoryGraphRepository = HistoryGraphRepositoryImpl.create();
  private constructor() {}

  /**
   * グラフ表示画面を表示する
   * @param req 
   * @param res 
   */
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

  /**
   * グラフデータを取得する
   * @param req
   * @param res 
   */
  public async getDataList(req: Request, res: Response) {
    res.send(await this.historyGraphRepository.getAllByUserId((req.session as any).user.id));
  }

  static create() {
    return new HistoryGraphController();
  }
}