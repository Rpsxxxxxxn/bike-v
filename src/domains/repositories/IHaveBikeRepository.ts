import HaveBikeEntity from "../entities/HaveBikeEntity";

export default interface IHaveBikeRepository {
  getAll(): Promise<HaveBikeEntity[]>;
  getAllByUserId(userId: number): Promise<HaveBikeEntity[]>;
  getById(id: number): Promise<HaveBikeEntity>;
  getByUserId(userId: number): Promise<HaveBikeEntity[]>;
  create(entity: HaveBikeEntity): Promise<HaveBikeEntity>;
  update(entity: HaveBikeEntity): Promise<void>;
  delete(id: number): Promise<void>;
}