import HistoryEntity from "../entities/HistoryEntity";

export default interface IHistoryGraphRepository {
  getAllByUserId(userId: number): Promise<HistoryEntity[]>;
}