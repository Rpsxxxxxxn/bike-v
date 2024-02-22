import MaintenanceForm from "../../controllers/forms/MaintenanceForm";
import IMaintenanceRepository from "../../domains/repositories/IMaintenanceRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class MaintenanceRepositoryImpl implements IMaintenanceRepository {
  static SQL_MAINTENANCE_INSERT = 'INSERT INTO maintenance (bike_id, title, description, odo, price, date) VALUES (?, ?, ?, ?, ?, ?)';
  
  private constructor() {}

  static create() {
    return new MaintenanceRepositoryImpl();
  }

  public async get(id: number): Promise<any> {
    const database = SQLiteHelper.create();
    const maintenance: any = await database.get(`
    SELECT *
    FROM maintenance
    WHERE id = ?`, [id]);
    await database.close();
    return maintenance;
  }

  public async register(userId: number, form: MaintenanceForm): Promise<any> {
    const database = SQLiteHelper.create();
    const bikeInfo: any = await database.get(`SELECT * FROM bike WHERE name = ?`, [form.bikeName]);
    if (bikeInfo) {
      await database.execute(`
      INSERT INTO maintenance (user_id, bike_id, title, description, odo, price, date)
      VALUES (?, ?, ?, ?, ?, ?, ?)`, [
        userId,
        bikeInfo.id,
        form.title,
        form.description,
        form.odo,
        form.price,
        form.date
      ]);
      await database.close();
    }
  }

  public async update(id: number, form: MaintenanceForm): Promise<void> {
    const database = SQLiteHelper.create();
    await database.execute(`
    UPDATE maintenance
    SET title = ?, description = ?, odo = ?, price = ?, date = ?
    WHERE id = ?`, [
      form.title,
      form.description,
      form.odo,
      form.price,
      form.date,
      id
    ]);
    await database.close();
  }
}