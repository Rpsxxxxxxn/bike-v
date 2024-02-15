import History from "../../controllers/forms/History";

export default interface IHistoryRepository {
  get(): Promise<any>;
  update(form: History): Promise<any>;
  delete(form: History): Promise<any>;
}