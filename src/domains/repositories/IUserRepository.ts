import UserForm from "../../controllers/forms/UserForm";
import UserEntity from "../entities/UserEntity";

export default interface IUserRepository {
  insert(form: UserForm): Promise<void>;
  update(form: UserForm): Promise<void>;
  delete(id: number): Promise<void>;
  get(form: UserForm): Promise<UserEntity | null>;
  getByEmail(email: string): Promise<UserEntity | null>;
  getById(id: number): Promise<UserEntity | null>;
  getAll(): Promise<UserEntity[]>;
}