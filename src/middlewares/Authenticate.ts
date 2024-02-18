import { NextFunction, Request, Response } from "express";
import UserRepositoryImpl from "../infrastructures/databases/UserRepositoryImpl";

export default class Authenticate {
  static userRepository = UserRepositoryImpl.create();

  public static async authenticateUser(req: Request, res: Response, next: NextFunction) {
    try {
      // 現在のURLがログイン画面の場合はパス
      const reqUrl = req.url;
      switch (reqUrl) {
        case '/user/login':
        case '/user/register':
          next();
          return;
      }
      // /api/* は認証不要
      // if (reqUrl.startsWith('/api/')) {
      //   next();
      //   return;
      // }
      if ((req.session as any).user) {
        next();
        return;
      }
      res.redirect('/user/login');
    } catch (e) {
      res.status(401).send({ error: "権限がありません" });
    }
  }
}