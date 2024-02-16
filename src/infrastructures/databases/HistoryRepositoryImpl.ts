import History from "../../controllers/forms/HistoryForm";
import HistoryEntity from "../../domains/entities/HistoryEntity";
import IHistoryRepository from "../../domains/repositories/IHistoryRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class HistoryRepositoryImpl implements IHistoryRepository {
  private constructor() {}

  static create() {
    return new HistoryRepositoryImpl();
  }

  public async get(): Promise<HistoryEntity> {;
    const database = SQLiteHelper.create();
    const dataList: any = await database.all('SELECT * FROM maintenance', []);
    database.close();
    return dataList;
  }

  public async getAll(): Promise<HistoryEntity[]> {
    return [];
  }

  public async getByBikeId(bikeId: number): Promise<HistoryEntity[]> {
    return [];
  }

  public async update(form: History): Promise<any> {
    return;
  }

  public async delete(form: History): Promise<any> {
    return;
  }
}