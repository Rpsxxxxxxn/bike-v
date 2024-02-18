import { Request, Response } from "express";
import IBikeRepository from "../domains/repositories/IBikeRepository";
import BikeRepositoryImpl from "../infrastructures/databases/BikeRepositoryImpl";
import BikeForm from "./forms/BikeForm";
import HaveBikeRepositoryImpl from "../infrastructures/databases/HaveBikeRepositoryImpl";
import IHaveBikeRepository from "../domains/repositories/IHaveBikeRepository";

export default class BikeController {
  private bikeRepository: IBikeRepository = BikeRepositoryImpl.create();
  private haveBikeRepository: IHaveBikeRepository = HaveBikeRepositoryImpl.create();

  private constructor() {}

  /**
   * 車体一覧画面を表示する
   * @param req 
   * @param res 
   */
  public async index(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'bike',
      page_id: 'bike',
      title: '車体一覧',
      params: {
        bikeList: await this.bikeRepository.getAll()
      }
    });
  }

  /**
   * 車体登録画面を表示する
   * @param req 
   * @param res 
   */
  public async getRegister(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'bikeRegister',
      page_id: 'bike',
      title: '車体登録',
      params: {}
    });
  }

  /**
   * 車体登録
   * @param req 
   * @param res 
   */
  public async postRegister(req: Request, res: Response) {
    const form: BikeForm = req.body;
    // 車体登録処理
    await this.bikeRepository.create(form);
    res.redirect('/bike');
  }

  /**
   * 所有車体画面を表示する
   * @param req 
   * @param res 
   */
  public async getHaveBike(req: Request, res: Response) {
    const user = (req.session as any).user;

    res.render('layout', {
      layout_name: 'haveBike',
      page_id: 'bike',
      title: '所有車体',
      params: {
        haveBikeList: await this.haveBikeRepository.getAllByUserId(user.id)
      }
    });
  }

  static create() {
    return new BikeController();
  }
}