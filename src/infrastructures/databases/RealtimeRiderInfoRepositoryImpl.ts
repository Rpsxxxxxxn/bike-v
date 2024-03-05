import RiderForm from "../../controllers/forms/RiderForm";
import RiderEntity from "../../domains/entities/RiderEntity";
import IRealtimeRiderInfoRepository from "../../domains/repositories/IRealtimeRiderInfoRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class RealtimeRiderInfoRepositoryImpl implements IRealtimeRiderInfoRepository {
  private constructor() {}

  static create() {
    return new RealtimeRiderInfoRepositoryImpl();
  }

  public get(id: number): Promise<RiderEntity> {
    const sql = SQLiteHelper.create();
    const data: any = sql.get(`SELECT * FROM rider WHERE id = ?`, [id]);
    return Promise.resolve(
      RiderEntity.create(data.id, data.username, data.leftLeanAngle, data.rightLeanAngle, data.topSpeed));
  }
  
  public getByUserId(userId: number): Promise<RiderEntity> {
    const sql = SQLiteHelper.create();
    const data: any = sql.get(`SELECT * FROM rider WHERE user_id = ?`, [userId]);
    return Promise.resolve(
      RiderEntity.create(data.id, data.username, data.leftLeanAngle, data.rightLeanAngle, data.topSpeed));
  }
  
  public getAll(): Promise<RiderEntity[]> {
    const sql = SQLiteHelper.create();
    const dataList: any = sql.all(`SELECT * FROM rider`, []);
    return Promise.resolve(dataList.map((data: any) => {
      return RiderEntity.create(data.id, data.username, data.leftLeanAngle, data.rightLeanAngle, data.topSpeed);
    }));
  }

  public create(form: RiderForm): Promise<void> {
    const sql = SQLiteHelper.create();
    sql.execute(`INSERT INTO rider (left_lean_angle, right_lean_angle, top_speed) VALUES (?, ?, ?, ?, ?)`, [form.leftLeanAngle, form.rightLeanAngle, form.topSpeed]);
    return Promise.resolve();
  }
  
  public update(userId: number, form: RiderForm): Promise<void> {
    const sql = SQLiteHelper.create();
    sql.execute(`UPDATE rider SET left_lean_angle = ?, right_lean_angle = ?, top_speed = ? WHERE user_id = ?`, [form.leftLeanAngle, form.rightLeanAngle, form.topSpeed, userId]);
    return Promise.resolve();
  }

  public delete(id: number): Promise<void> {
    const sql = SQLiteHelper.create();
    sql.execute(`DELETE FROM rider WHERE id = ?`, [id]);
    return Promise.resolve();
  }
}