import { Request, Response } from "express";
import IBikeRepository from "../domains/repositories/IBikeRepository";
import BikeRepositoryImpl from "../infrastructures/databases/BikeRepositoryImpl";
import BikeForm from "./forms/BikeForm";
import BikeValidator from "./forms/validators/BikeValidator";

export default class BikeController {
  private bikeRepository: IBikeRepository = BikeRepositoryImpl.create();

  private constructor() {}

  static create() {
    return new BikeController();
  }

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
   * 車体一覧画面を表示する
   * @param req 
   * @param res 
   */
  public async getBikeList(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'bikeList',
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
    if (BikeValidator.create(form).isInvalid()) {
      res.redirect('/bike');
      return;
    }
    await this.bikeRepository.create(form);
    res.redirect('/bike');
  }

}