export default class RiderEntity {
  private id: string;
  private username: string;
  private leftLeanAngle: number;
  private rightLeanAngle: number;
  private topSpeed: number;

  private constructor(
    id: string,
    username: string,
    leftLeanAngle: number,
    rightLeanAngle: number,
    topSpeed: number
  ) {
    this.id = id;
    this.username = username;
    this.leftLeanAngle = leftLeanAngle;
    this.rightLeanAngle = rightLeanAngle;
    this.topSpeed = topSpeed;
  }

  static create(
    id: string,
    username: string,
    leftLeanAngle: number,
    rightLeanAngle: number,
    topSpeed: number
  ) {
    return new RiderEntity(id, username, leftLeanAngle, rightLeanAngle, topSpeed);
  }

  public getId() {
    return this.id;
  }

  public getUsername() {
    return this.username;
  }

  public getLeftLeanAngle() {
    return this.leftLeanAngle;
  }

  public getRightLeanAngle() {
    return this.rightLeanAngle;
  }

  public getTopSpeed() {
    return this.topSpeed;
  }
}