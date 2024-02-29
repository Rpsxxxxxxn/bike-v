import HaveBikeEntity from "../../domains/entities/HaveBikeEntity";
import IHaveBikeRepository from "../../domains/repositories/IHaveBikeRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class HaveBikeRepositoryImpl implements IHaveBikeRepository {
  private constructor() {}

  static create() {
    return new HaveBikeRepositoryImpl();
  }

  public async getAllByUserId(id: number): Promise<HaveBikeEntity[]> {
    const db = SQLiteHelper.create();
    const dataList: any = await db.all(`
      SELECT bike.company, bike.name, bike.model, bike.oil_change, bike.oil_filter, bike.cc, bike.body_link, have_bike.purchase_date
      FROM have_bike
      LEFT JOIN user ON user.id = have_bike.user_id
      LEFT JOIN bike ON bike.id = have_bike.bike_id
      WHERE user.id = ?`, [id]);

    dataList.map((data: any) => {
      return HaveBikeEntity.create(
        data.company,
        data.name,
        data.model,
        data.oil_change,
        data.oil_filter,
        data.cc,
        data.body_link,
        new Date(data.purchase_date),
      );
    });

    return dataList;
  }
  
  public async create(userId: number, bikeId: number, purchaseDate: Date): Promise<void> {
    const db = SQLiteHelper.create();
    await db.execute(`
    INSERT INTO have_bike (user_id, bike_id, purchase_date)
    VALUES (?, ?, ?)`, [userId, bikeId, purchaseDate]);
    db.close();
  }
  
  public async delete(userId: number, bikeId: number): Promise<void> {
    const db = SQLiteHelper.create();
    await db.execute(`
    DELETE FROM have_bike
    WHERE user_id = ? AND bike_id = ?`, [userId, bikeId]);
    db.close();
  }
}