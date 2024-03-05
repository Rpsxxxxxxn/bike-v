import { Request, Response } from "express";

export default class RankingListForRiderInfoController {
  private constructor() {}

  static create() {
    return new RankingListForRiderInfoController();
  }

  /**
   * ランキングリストを取得する
   */
  public async get(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'rankingListForUser',
      page_id: 'rankingListForUser',
      title: 'ランキングリスト',
      params: {}
    });
  }

}