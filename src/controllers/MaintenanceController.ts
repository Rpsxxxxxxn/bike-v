import { Request, Response } from "express";
import MaintenanceForm from "./forms/MaintenanceForm";
import IMaintenanceRepository from "../domains/repositories/IMaintenanceRepository";
import MaintenanceRepositoryImpl from "../infrastructures/databases/MaintenanceRepositoryImpl";
import IHaveBikeRepository from "../domains/repositories/IHaveBikeRepository";
import HaveBikeRepositoryImpl from "../infrastructures/databases/HaveBikeRepositoryImpl";

export default class MaintenanceController {
  private static PAGE_ID = 'maintenance';
  private static TITLE = 'メンテナンス登録';
  private maintenanceRepository: IMaintenanceRepository = MaintenanceRepositoryImpl.create();
  private haveRepository: IHaveBikeRepository = HaveBikeRepositoryImpl.create();
  private constructor() {}

  public async register(req: Request, res: Response) {
    const form: MaintenanceForm = req.body;
    await this.maintenanceRepository.register((req.session as any).user.id, form);
    res.redirect('/maintenance');
  }

  public async index(req: Request, res: Response) {
    res.render('layout', {
      layout_name: 'maintenance',
      page_id: MaintenanceController.PAGE_ID,
      title: MaintenanceController.TITLE,
      params: {
        bikeList: await this.haveRepository.getAllByUserId((req.session as any).user.id)
      }
    });
  }

  static create() {
    return new MaintenanceController();
  }
}