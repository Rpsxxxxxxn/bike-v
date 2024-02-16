export default class UserEntity {
  private id: number;
  private username: string;
  private email: string;
  private password: string;

  private constructor(
    id: number,
    username: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static create(
    id: number,
    username: string,
    email: string,
    password: string
  ) {
    return new UserEntity(id, username, email, password);
  }

  public getId() {
    return this.id;
  }

  public getUsername() {
    return this.username;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }
}