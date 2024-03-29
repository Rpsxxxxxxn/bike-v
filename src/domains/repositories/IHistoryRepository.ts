import History from "../../controllers/forms/HistoryForm";
import HistoryEntity from "../entities/HistoryEntity";

export default interface IHistoryRepository {
  get(id: number): Promise<HistoryEntity>;
  getByUserId(userId: number): Promise<HistoryEntity[]>;
  getAll(): Promise<HistoryEntity[]>;
  getByBikeId(bikeId: number): Promise<HistoryEntity[]>;
  update(id: number, form: History): Promise<void>;
  delete(id: number): Promise<void>;
}