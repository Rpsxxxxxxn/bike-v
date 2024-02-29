import History from "../../controllers/forms/HistoryForm";
import HistoryEntity from "../../domains/entities/HistoryEntity";
import IHistoryRepository from "../../domains/repositories/IHistoryRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class HistoryRepositoryImpl implements IHistoryRepository {
  private constructor() { }

  static create() {
    return new HistoryRepositoryImpl();
  }

  public async get(id: number): Promise<HistoryEntity> {
    const database = SQLiteHelper.create();
    const dataList: any = await database.all(`
    SELECT m.id, m.title, m.description, m.odo, m.price, m.date, bike.name AS bike_name
    FROM maintenance AS m
    LEFT JOIN user ON user.id = m.user_id
    LEFT JOIN bike ON bike.id = m.bike_id
    WHERE m.id = ?`, [id]);
    database.close();
    return dataList;
  }

  public async getByUserId(userId: number): Promise<HistoryEntity[]> {
    const database = SQLiteHelper.create();
    const dataList: any = await database.all(`
    SELECT m.id, m.title, m.description, m.odo, m.price, m.date, bike.name AS bike_name
    FROM maintenance AS m
    LEFT JOIN user ON user.id = m.user_id
    LEFT JOIN bike ON bike.id = m.bike_id
    WHERE m.user_id = ?`, [userId]);
    dataList.map((data: any) => {
      return HistoryEntity.create(
        data.id,
        data.bike_name,
        data.title,
        data.description,
        data.odo,
        data.price,
        data.date
      );
    });
    database.close();
    return dataList;
  }

  public async getAll(): Promise<HistoryEntity[]> {
    const database = SQLiteHelper.create();
    const dataList: any = await database.all(`
    SELECT m.id, m.title, m.description, m.odo, m.price, m.date, bike.name AS bike_name
    FROM maintenance AS m
    LEFT JOIN user ON user.id = m.user_id
    LEFT JOIN bike ON bike.id = m.bike_id
    ORDER BY m.date DESC`, []);
    dataList.map((data: any) => {
      return HistoryEntity.create(
        data.id,
        data.bike_name,
        data.title,
        data.description,
        data.odo,
        data.price,
        data.date
      );
    });
    database.close();
    return dataList;
  }

  public async getByBikeId(bikeId: number): Promise<HistoryEntity[]> {
    const database = SQLiteHelper.create();
    const dataList: any = await database.all(`
    SELECT m.id, m.title, m.description, m.odo, m.price, m.date, bike.name AS bike_name
    FROM maintenance AS m
    LEFT JOIN user ON user.id = m.user_id
    LEFT JOIN bike ON bike.id = m.bike_id
    WHERE m.bike_id = ?`, [bikeId]);
    dataList.map((data: any) => {
      return HistoryEntity.create(
        data.id,
        data.bike_name,
        data.title,
        data.description,
        data.odo,
        data.price,
        data.date
      );
    });
    database.close();
    return dataList;
  }

  public async update(id: number, form: History): Promise<void> {
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
    database.close();
  }

  public async delete(id: number): Promise<void> {
    const database = SQLiteHelper.create();
    await database.execute('DELETE FROM maintenance WHERE id = ?', [id]);
    database.close();
  }
}