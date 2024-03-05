import { Request, Response } from "express";
import IRealtimeRiderInfoRepository from "../domains/repositories/IRealtimeRiderInfoRepository";
import RealtimeRiderInfoRepositoryImpl from "../infrastructures/databases/RealtimeRiderInfoRepositoryImpl";
import RiderForm from "./forms/RiderForm";
import RiderValidator from "./forms/validators/RiderValidator";

export default class RealtimeRiderInfoController {
  private realtimeRiderInfoRepository: IRealtimeRiderInfoRepository = RealtimeRiderInfoRepositoryImpl.create();

  private constructor() {}

  static create() {
    return new RealtimeRiderInfoController();
  }

  /**
   * リアルタイムライダー情報のページを表示する
   * @param req 
   * @param res 
   */
  public async get(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'realtimeRiderInfo',
      page_id: 'realtimeRiderInfo',
      title: 'リアルタイムライダー情報',
      params: {}
    });
  }

  /**
   * リアルタイムライダー情報を更新する
   * @param req 
   * @param res 
   */
  public async post(req: Request, res: Response) {
    const userId = (req.session as any).user.id;
    const form: RiderForm = req.body;
    if (RiderValidator.create(form).isInvalid()) {
      res.render('layout', {
        layout_name: 'realtimeRiderInfo',
        page_id: 'realtimeRiderInfo',
        title: 'リアルタイムライダー情報',
        params: {
          error: '入力内容に誤りがあります'
        }
      });
      return;
    }
    await this.realtimeRiderInfoRepository.update(userId, form);
    res.redirect('/rider/realtime');
  }
}