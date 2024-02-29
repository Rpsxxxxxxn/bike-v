export default class PurchaseDate {
  private date: Date;

  private constructor(date: Date) {
    this.date = date;
  }

  static create(date: Date) {
    return new PurchaseDate(date);
  }

  public getDate() {
    return this.date;
  }

  public getYYYYMMDD() {
    return this.date.toISOString().slice(0, 10);
  }

  // YYYY年MM月DD日
  public getYYYYMMDDJP() {
    return this.date.toLocaleDateString('ja-JP');
  }
}