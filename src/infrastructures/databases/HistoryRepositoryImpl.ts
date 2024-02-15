import History from "../../controllers/forms/History";
import IHistoryRepository from "../../domains/repositories/IHistoryRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class HistoryRepositoryImpl implements IHistoryRepository {
  private constructor() {

  }

  static create() {
    return new HistoryRepositoryImpl();
  }

  public async get(): Promise<any> {
    const database = SQLiteHelper.create();
    const dataList = await database.all('SELECT * FROM maintenance', []);
    database.close();
    return dataList;
  }

  public async update(form: History): Promise<any> {
    return;
  }

  public async delete(form: History): Promise<any> {
    return;
  }
}