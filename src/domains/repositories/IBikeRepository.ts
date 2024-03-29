import BikeForm from "../../controllers/forms/BikeForm";
import BikeEntity from "../entities/BikeEntity";

export default interface IBikeRepository {
  get(): Promise<BikeEntity>;
  getAll(): Promise<BikeEntity[]>;
  getByCompanyAndName(company: string, name: string): Promise<BikeEntity>;
  create(form: BikeForm): Promise<void>;
  update(form: BikeForm): Promise<void>;
  delete(form: BikeForm): Promise<void>;
}