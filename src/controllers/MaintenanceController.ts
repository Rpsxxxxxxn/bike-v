import { Request, Response } from "express";
import MaintenanceForm from "./forms/MaintenanceForm";
import IMaintenanceRepository from "../domains/repositories/IMaintenanceRepository";
import MaintenanceRepositoryImpl from "../infrastructures/databases/MaintenanceRepositoryImpl";

export default class MaintenanceController {
  private static PAGE_ID = 'maintenance';
  private static TITLE = 'メンテナンス登録';
  private maintenanceRepository: IMaintenanceRepository = MaintenanceRepositoryImpl.create();
  private constructor() {}

  public async register(req: any, res: Response) {
    if (!req.session.user) {
      res.redirect('/user/login');
    }
    const form: MaintenanceForm = req.body;
    await this.maintenanceRepository.register(form);
    res.redirect('/maintenance');
  }

  public async index(req: any, res: Response) {
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