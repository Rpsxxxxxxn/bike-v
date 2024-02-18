import { Request, Response } from "express";
import IHistoryRepository from "../domains/repositories/IHistoryRepository";
import HistoryRepositoryImpl from "../infrastructures/databases/HistoryRepositoryImpl";
import HistoryForm from "./forms/HistoryForm";
import HistoryValidator from "./forms/validators/HistoryValidator";
import IHaveBikeRepository from "../domains/repositories/IHaveBikeRepository";
import HaveBikeRepositoryImpl from "../infrastructures/databases/HaveBikeRepositoryImpl";

export default class HistoryController {
  private historyRepository: IHistoryRepository = HistoryRepositoryImpl.create();
  private haveRepository: IHaveBikeRepository = HaveBikeRepositoryImpl.create();
  private static PAGE_ID = 'history';
  private static TITLE = 'メンテナンス記録';

  private constructor() {}

  /**
   * 登録画面を表示する
   * @param req 
   * @param res 
   */
  public async get(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'history',
      page_id: HistoryController.PAGE_ID,
      title: HistoryController.TITLE,
      params: {
        dataList: await this.historyRepository.getAll()
      }
    });
  }

  /**
   * 登録情報を取得する
   * @param req 
   * @param res 
   */
  public async getUpdate(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    res.render('layout', {
      layout_name: 'historyUpdate',
      page_id: HistoryController.PAGE_ID,
      title: HistoryController.TITLE + '更新',
      params: {
        bikeList: await this.haveRepository.getAllByUserId((req.session as any).user.id),
        bikeData: await this.historyRepository.get(id)
      }
    });
  }

  /**
   * 登録情報の更新
   * @param req 
   * @param res 
   */
  public async postUpdate(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const form: HistoryForm = req.body;
    if (HistoryValidator.create(form).isInvalid()) {
      res.redirect('/history');
    }
    await this.historyRepository.update(id, form);
    res.redirect('/history');
  }

  /**
   * 登録情報の削除
   * @param req 
   * @param res 
   */
  public async delete(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    await this.historyRepository.delete(id);
    res.redirect('/history');
  }

  static create() {
    return new HistoryController();
  }
}