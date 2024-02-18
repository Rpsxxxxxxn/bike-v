import HistoryEntity from "../entities/HistoryEntity";

export default interface IHistoryGraphRepository {
  // getAll(): Promise<HistoryEntity[]>;
  getAllByUserId(userId: number): Promise<HistoryEntity[]>;
  // getByBikeId(bikeId: number): Promise<HistoryEntity[]>;
}