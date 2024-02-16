import { Request, Response } from "express";
import IUserRepository from "../domains/repositories/IUserRepository";
import UserRepositoryImpl from "../infrastructures/databases/UserRepositoryImpl";
import UserForm from "./forms/UserForm";
import bcrypt from 'bcrypt';
import UserValidator from "./forms/validators/UserValidator";

export default class UserController {
  private static PAGE_ID = 'user';
  private static TITLE = 'ユーザー';
  private userRepository: IUserRepository = UserRepositoryImpl.create();
  private constructor() {}

  /**
   * ユーザー登録
   * @param req 
   * @param res 
   */
  public async getRegister(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'register',
      page_id: UserController.PAGE_ID,
      title: UserController.TITLE + '登録',
      params: {}
    });
  }

  /**
   * ユーザー登録
   * @param req 
   * @param res 
   */
  public async postRegister(req: Request, res: Response) {
    const form: UserForm = req.body;
    if (UserValidator.create(form).isInvalid()) {
      res.redirect('/user/register');
    }
    form.password = await bcrypt.hash(form.password, 10);
    await this.userRepository.insert(form);
    res.redirect('/user/login');
  }

  /**
   * ユーザーログイン
   * @param req 
   * @param res 
   */
  public async getLogin(req: any, res: Response) {
    res.render('layout', {
      layout_name: 'login',
      page_id: UserController.PAGE_ID,
      title: UserController.TITLE + 'ログイン',
      params: {}
    });
  }

  /**
   * ユーザーログイン
   * @param req 
   * @param res 
   */
  public async postLogin(req: any, res: Response) {
    const form: UserForm = req.body;
    const user = await this.userRepository.getByEmail(form.email);
    if (!user) {
      res.redirect('/user/login');
    } else {
      const result = bcrypt.compare(form.password, user.getPassword());
      if (!result) {
        res.redirect('/user/login');
      }
      req.session.user = user;
      res.redirect('/maintenance');
    }
  }

  /**
   * ユーザーログアウト
   * @param req 
   * @param res 
   */
  public async logout(req: any, res: Response) {
    req.session.user = null;
    res.redirect('/user/login');
  }

  static create() {
    return new UserController();
  }
}
