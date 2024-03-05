import RiderForm from "../../controllers/forms/RiderForm";
import RiderEntity from "../entities/RiderEntity";

export default interface IRealtimeRiderInfoRepository {
  get(id: number): Promise<RiderEntity>;
  getByUserId(userId: number): Promise<RiderEntity>;
  getAll(): Promise<RiderEntity[]>;
  create(form: RiderForm): Promise<void>;
  update(userId: number, form: RiderForm): Promise<void>;
  delete(id: number): Promise<void>;
}