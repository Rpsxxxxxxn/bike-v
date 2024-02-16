import BikeForm from "../../controllers/forms/BikeForm";
import BikeEntity from "../../domains/entities/BikeEntity";
import IBikeRepository from "../../domains/repositories/IBikeRepository";

export default class BikeRepositoryImpl implements IBikeRepository {
  private constructor() {

  }

  static create() {
    return new BikeRepositoryImpl();
  }

  public async get(): Promise<BikeEntity> {
    return new BikeEntity('name', 'description', 'image', 'created_at', 'updated_at', '', new Date());
  }

  public async create(form: BikeForm): Promise<void> {
    return;
  }

  public async update(form: BikeForm): Promise<void> {
    return;
  }

  public async delete(form: BikeForm): Promise<void> {
    return;
  }
}