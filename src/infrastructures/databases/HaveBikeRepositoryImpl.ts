import HaveBikeEntity from "../../domains/entities/HaveBikeEntity";
import IHaveBikeRepository from "../../domains/repositories/IHaveBikeRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class HaveBikeRepositoryImpl implements IHaveBikeRepository {
  private constructor() {}

  static create() {
    return new HaveBikeRepositoryImpl();
  }
  public async getAll(): Promise<HaveBikeEntity[]> {
    const db = SQLiteHelper.create();
    const dataList: any = await db.all('SELECT * FROM have_bike', []);

    return []
  }

  public async getAllByUserId(id: number): Promise<HaveBikeEntity[]> {
    const db = SQLiteHelper.create();
    const dataList: any = await db.all(`
      SELECT bike.company, bike.name, bike.model, bike.oil_change, bike.oil_filter, bike.cc
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
        data.cc
      );
    });

    return dataList;
  }
  
  public async getById(id: number): Promise<HaveBikeEntity> {
    throw new Error("Method not implemented.");
  }
  
  public async getByUserId(userId: number): Promise<HaveBikeEntity[]> {
    throw new Error("Method not implemented.");
  }
  
  public async create(entity: HaveBikeEntity): Promise<HaveBikeEntity> {
    throw new Error("Method not implemented.");
  }

  public async update(entity: HaveBikeEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  public async delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}