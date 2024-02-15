import { Request, Response } from "express";
import Maintenance from "./forms/Maintenance";
import IMaintenanceRepository from "../domains/repositories/IMaintenanceRepository";
import MaintenanceRepositoryImpl from "../infrastructures/databases/MaintenanceRepositoryImpl";

export default class MaintenanceController {
  private static PAGE_ID = 'maintenance';
  private static TITLE = 'メンテナンス記録登録';
  private maintenanceRepository: IMaintenanceRepository = MaintenanceRepositoryImpl.create();
  private constructor() {}

  public async register(req: Request, res: Response) {
    const form: Maintenance = req.body;
    await this.maintenanceRepository.register(form);
    res.redirect('/maintenance');
  }

  public async index(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'maintenance',
      page_id: MaintenanceController.PAGE_ID,
      title: MaintenanceController.TITLE,
      params: {}
    });
  }

  static create() {
    return new MaintenanceController();
  }
}