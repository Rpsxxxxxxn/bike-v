export default class HistoryEntity {
  private _id: string;
  private _bikeName: string;
  private _title: string;
  private _description: string;
  private _odo: number;
  private _price: number;
  private _date: Date;

  private constructor(
    id: string,
    bikeName: string,
    title: string,
    description: string,
    odo: number,
    price: number,
    date: Date
  ) {
    this._id = id;
    this._bikeName = bikeName;
    this._title = title;
    this._description = description;
    this._odo = odo;
    this._price = price;
    this._date = date;
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

  get id(): string {
    return this._id;
  }

  get bikeName(): string {
    return this._bikeName;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get odo(): number {
    return this._odo;
  }

  get price(): number {
    return this._price;
  }

  get date(): Date {
    return this._date;
  }
}