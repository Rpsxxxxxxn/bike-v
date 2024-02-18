import BikeForm from "../../controllers/forms/BikeForm";
import HaveBikeEntity from "../entities/HaveBikeEntity";

export default interface IHaveBikeRepository {
  getAll(): Promise<HaveBikeEntity[]>;
  getAllByUserId(userId: number): Promise<HaveBikeEntity[]>;
  getById(id: number): Promise<HaveBikeEntity>;
  getByUserId(userId: number): Promise<HaveBikeEntity[]>;
  create(userId: number, bikeId: number, purchaseDate: Date): Promise<void>;
  update(entity: BikeForm): Promise<void>;
  delete(id: number): Promise<void>;
}