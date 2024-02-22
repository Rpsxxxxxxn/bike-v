import { NextFunction, Request, Response } from "express";

export default class Authenticate {
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