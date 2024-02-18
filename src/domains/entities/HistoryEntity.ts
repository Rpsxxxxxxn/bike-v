export default class HistoryEntity {
  private id: string;
  private bikeName: string;
  private title: string;
  private description: string;
  private odo: number;
  private price: number;
  private date: Date;

  private constructor(
    id: string,
    bikeName: string,
    title: string,
    description: string,
    odo: number,
    price: number,
    date: Date
  ) {
    this.id = id;
    this.bikeName = bikeName;
    this.title = title;
    this.description = description;
    this.odo = odo;
    this.price = price;
    this.date = date;
  }

  static create(
    id: string,
    bikeName: string,
    title: string,
    description: string,
    odo: number,
    price: number,
    date: Date
  ) {
    return new HistoryEntity(id, bikeName, title, description, odo, price, date);
  }

  public getId() {
    return this.id;
  }

  public getBikeName() {
    return this.bikeName;
  }

  public getTitle() {
    return this.title;
  }

  public getDescription() {
    return this.description;
  }

  public getOdo() {
    return this.odo;
  }

  public getPrice() {
    return this.price;
  }

  public getDate() {
    return this.date;
  }
}