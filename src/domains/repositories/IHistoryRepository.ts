import History from "../../controllers/forms/HistoryForm";
import HistoryEntity from "../entities/HistoryEntity";

export default interface IHistoryRepository {
  get(): Promise<HistoryEntity>;
  getAll(): Promise<HistoryEntity[]>;
  getByBikeId(bikeId: number): Promise<HistoryEntity[]>;
  update(form: History): Promise<void>;
  delete(form: History): Promise<void>;
}