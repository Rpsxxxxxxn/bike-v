import { Request, Response } from "express";
import IHaveBikeRepository from "../domains/repositories/IHaveBikeRepository";
import HaveBikeRepositoryImpl from "../infrastructures/databases/HaveBikeRepositoryImpl";
import IBikeRepository from "../domains/repositories/IBikeRepository";
import BikeRepositoryImpl from "../infrastructures/databases/BikeRepositoryImpl";
import HaveBikeForm from "./forms/HaveBikeForm";
import HaveBikeValidator from "./forms/validators/HaveBikeValidator";

export default class HaveBikeController {
  private bikeRepository: IBikeRepository = BikeRepositoryImpl.create();
  private haveBikeRepository: IHaveBikeRepository = HaveBikeRepositoryImpl.create();

  private constructor() {}
  static create() {
    return new HaveBikeController();
  }

  /**
   * 所有車体画面を表示する
   * @param req 
   * @param res 
   */
  public async getHaveBike(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'haveBike',
      page_id: 'bike',
      title: '所有車体',
      params: {
        haveBikeList: await this.haveBikeRepository.getAllByUserId((req.session as any).user.id)
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
      layout_name: 'haveBikeList',
      page_id: 'bike',
      title: '車体一覧',
      params: {
        bikeList: await this.bikeRepository.getAll()
      }
    });
  }

  /**
   * 所有車体登録
   * @param req 
   * @param res 
   */
  public async postHaveBikeRegister(req: Request, res: Response) {
    const form: HaveBikeForm = req.body;
    if (HaveBikeValidator.create(form).isInvalid()) {
      res.redirect('/bike/have');
      return;
    }
    await this.haveBikeRepository.create((req.session as any).user.id, Number(req.params.id), new Date(form.date));
    res.redirect('/bike/have');
  }

  public async postHaveBikeDelete(req: Request, res: Response) {
    const form: HaveBikeForm = req.body;
    if (HaveBikeValidator.create(form).isInvalid()) {
      res.redirect('/bike/have');
      return;
    }
    await this.haveBikeRepository.delete((req.session as any).user.id, Number(req.params.id));
    res.redirect('/bike/have');
  }
}