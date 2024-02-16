export default class MaintenanceEntity {
  private bikeName: string;
  private title: string;
  private description: string;
  private odo: number;
  private price: number;
  private date: Date;

  constructor(bikeName: string, title: string, description: string, odo: number, price: number, date: Date) {
    this.bikeName = bikeName;
    this.title = title;
    this.description = description;
    this.odo = odo;
    this.price = price;
    this.date = date;
  }

  public getBikeName(): string {
    return this.bikeName;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public getOdo(): number {
    return this.odo;
  }

  public getPrice(): number {
    return this.price;
  }

  public getDate(): Date {
    return this.date;
  }
}