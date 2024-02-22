import { Request, Response } from "express";

export default class View3DController {
  private constructor() {}

  public async index(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'view3d',
      page_id: 'view3D',
      title: '3Dビュー',
      params: {}
    });
  }

  static create() {
    return new View3DController();
  }
}