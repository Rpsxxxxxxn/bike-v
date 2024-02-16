import IBikeRepository from "../domains/repositories/IBikeRepository";
import BikeRepositoryImpl from "../infrastructures/databases/BikeRepositoryImpl";
import BikeForm from "./forms/BikeForm";

export default class BikeController {
  private bikeRepository: IBikeRepository = BikeRepositoryImpl.create();

  private constructor() {}

  /**
   * 車体一覧画面を表示する
   * @param req 
   * @param res 
   */
  public async index(req: any, res: any) {
    res.render('layout', {
      layout_name: 'bike',
      page_id: 'bike',
      title: '車体一覧',
      params: {}
    });
  }

  /**
   * 車体登録画面を表示する
   * @param req 
   * @param res 
   */
  public async getRegister(req: any, res: any) {
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
  public async postRegister(req: any, res: any) {
    const form: BikeForm = req.body;
    // 車体登録処理
    await this.bikeRepository.create(form);
    res.redirect('/bike');
  }

  static create() {
    return new BikeController();
  }
}