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

  static create() {
    return new UserController();
  }

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
      res.render('layout', {
        layout_name: 'register',
        page_id: UserController.PAGE_ID,
        title: UserController.TITLE + '登録',
        params: {
          error: '入力内容に誤りがあります'
        }
      });
      return
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
  public async getLogin(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'login',
      page_id: UserController.PAGE_ID,
      title: UserController.TITLE + '認証',
      params: {}
    });
  }

  /**
   * ユーザーログイン
   * @param req 
   * @param res 
   */
  public async postLogin(req: Request, res: Response) {
    const form: UserForm = req.body;
    if (UserValidator.create(form).isInvalid()) {
      res.render('layout', {
        layout_name: 'login',
        page_id: UserController.PAGE_ID,
        title: UserController.TITLE + '認証',
        params: {
          error: '入力内容に誤りがあります'
        }
      });
      return;
    }
    const user = await this.userRepository.getByEmail(form.email);
    if (!user) {
      res.render('layout', {
        layout_name: 'login',
        page_id: UserController.PAGE_ID,
        title: UserController.TITLE + '認証',
        params: {
          error: 'ユーザーが見つかりません'
        }
      });
    } else {
      const result = await bcrypt.compare(form.password, user.getPassword());
      if (!result) {
        res.render('layout', {
          layout_name: 'login',
          page_id: UserController.PAGE_ID,
          title: UserController.TITLE + '認証',
          params: {
            error: 'パスワードが一致しません'
          }
        });
        return;
      }
      (req.session as any).user = user;
      res.redirect('/maintenance');
    }
  }

  /**
   * ユーザーログアウト
   * @param req 
   * @param res 
   */
  public async logout(req: Request, res: Response) {
    (req.session as any).user = null;
    res.redirect('/user/login');
  }
}
