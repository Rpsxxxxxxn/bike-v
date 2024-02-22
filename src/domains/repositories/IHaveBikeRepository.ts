import BikeForm from "../../controllers/forms/BikeForm";
import HaveBikeEntity from "../entities/HaveBikeEntity";

export default interface IHaveBikeRepository {
  getAll(): Promise<HaveBikeEntity[]>;
  getAllByUserId(userId: number): Promise<HaveBikeEntity[]>;
  create(userId: number, bikeId: number, purchaseDate: Date): Promise<void>;
  delete(userId: number, bikeId: number): Promise<void>;
}