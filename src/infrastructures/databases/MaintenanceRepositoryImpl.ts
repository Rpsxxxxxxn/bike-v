import Maintenance from "../../controllers/forms/MaintenanceForm";
import IMaintenanceRepository from "../../domains/repositories/IMaintenanceRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class MaintenanceRepositoryImpl implements IMaintenanceRepository {
  static SQL_BIKE_INSERT = 'INSERT INTO bike (name) VALUES (?)';
  static SQL_BIKE_SELECT = 'SELECT id FROM bike WHERE name = ?';
  static SQL_MAINTENANCE_INSERT = 'INSERT INTO maintenance (bike_id, title, description, odo, price, date) VALUES (?, ?, ?, ?, ?, ?)';
  
  private constructor() {}

  static create() {
    return new MaintenanceRepositoryImpl();
  }

  public async register(maintenance: Maintenance): Promise<any> {
    const database = SQLiteHelper.create();
    const bikeInfo: any = await database.get(MaintenanceRepositoryImpl.SQL_BIKE_SELECT, [maintenance.bikeName]);
    if (bikeInfo) {
      await database.execute(MaintenanceRepositoryImpl.SQL_MAINTENANCE_INSERT, [
        bikeInfo.id,
        maintenance.title,
        maintenance.description,
        maintenance.odo,
        maintenance.price,
        maintenance.date
      ]);
      await database.close();
    }
    return;
  }
}