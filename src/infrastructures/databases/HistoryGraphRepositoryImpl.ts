import HistoryEntity from "../../domains/entities/HistoryEntity";
import IHistoryGraphRepository from "../../domains/repositories/IHistoryGraphRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class HistoryGraphRepositoryImpl implements IHistoryGraphRepository {
  private constructor() {}

  static create() {
    return new HistoryGraphRepositoryImpl();
  }

  public async getAllByUserId(userId: number): Promise<HistoryEntity[]> {
    const db = SQLiteHelper.create();
    const dataList: any = await db.all(`
      SELECT m.title, m.description, m.odo, m.price, m.date, bike.name AS bikeName
      FROM maintenance AS m
      LEFT JOIN user ON user.id = m.user_id
      LEFT JOIN bike ON bike.id = m.bike_id
      WHERE user.id = ?
      ORDER BY m.date ASC`, [userId]);
    const result: HistoryEntity[] = dataList.map((data: any) => {
      return HistoryEntity.create(
        data.id,
        data.bikeName,
        data.title,
        data.description,
        data.odo,
        data.price,
        data.date
      );
    });
    return result;
  }
}