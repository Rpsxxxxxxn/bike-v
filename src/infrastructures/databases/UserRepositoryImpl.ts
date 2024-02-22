import UserForm from "../../controllers/forms/UserForm";
import UserEntity from "../../domains/entities/UserEntity";
import IUserRepository from "../../domains/repositories/IUserRepository";
import SQLiteHelper from "../../utils/SQLiteHelper";

export default class UserRepositoryImpl implements IUserRepository {
  private constructor() {}

  static create() {
    return new UserRepositoryImpl();
  }

  public async insert(form: UserForm): Promise<void> {
    const findUser = await this.get(form);
    if (findUser) {
      throw new Error('User already exists');
    }
    const db = SQLiteHelper.create();
    await db.execute('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [form.username, form.email, form.password]);
  }

  public async update(form: UserForm): Promise<void> {
    const findUser = await this.get(form);
    if (!findUser) {
      throw new Error('User not found');
    }
    const db = SQLiteHelper.create();
    await db.execute('UPDATE user SET email = ?, password = ? WHERE username = ?', [form.email, form.password, form.username]);
  }

  public async delete(id: number): Promise<void> {
    const db = SQLiteHelper.create();
    await db.execute('DELETE FROM user WHERE id = ?', [id]);
  }

  public async get(form: UserForm): Promise<UserEntity | null> {
    const db = SQLiteHelper.create();
    const user: any = await db.get('SELECT * FROM user WHERE username = ? AND password = ?', [form.username, form.password]);
    if (!user) {
      return null;
    }
    return UserEntity.create(user.id, user.username, user.email, user.password);
  }

  public async getByEmail(email: string): Promise<UserEntity | null> {
    const db = SQLiteHelper.create();
    const user: any = await db.get('SELECT * FROM user WHERE email = ?', [email]);
    if (!user) {
      return null;
    }
    return UserEntity.create(user.id, user.username, user.email, user.password);
  }

  public async getById(id: number): Promise<UserEntity | null> {
    const db = SQLiteHelper.create();
    const user: any = await db.get('SELECT * FROM user WHERE id = ?', [id]);
    return UserEntity.create(user.id, user.username, user.email, user.password);
  }

  public async getAll(): Promise<UserEntity[]> {
    const db = SQLiteHelper.create();
    const users: any = await db.all('SELECT * FROM user', []);
    return users.map((user: any) => UserEntity.create(user.id, user.username, user.email, user.password));
  }
}