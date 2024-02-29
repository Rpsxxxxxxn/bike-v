export default class HaveBikeEntity {
  private company: string;
  private name: string;
  private model: string;
  private oilChange: string;
  private oilFilter: string;
  private cc: number;
  private bodyLink: string;
  private purchaseDate: Date;

  private constructor(
    company: string,
    name: string,
    model: string,
    oilChange: string,
    oilFilter: string,
    cc: number,
    bodyLink: string,
    purchaseDate: Date
  ) {
    this.company = company;
    this.name = name;
    this.model = model;
    this.oilChange = oilChange;
    this.oilFilter = oilFilter;
    this.cc = cc;
    this.bodyLink = bodyLink;
    this.purchaseDate = purchaseDate;
  }

  static create(
    company: string,
    name: string,
    model: string,
    oilChange: string,
    oilFilter: string,
    cc: number,
    bodyLink: string,
    purchaseDate: Date
  ) {
    return new HaveBikeEntity(company, name, model, oilChange, oilFilter, cc, bodyLink, purchaseDate);
  }

  public getCompany() {
    return this.company;
  }

  public getName() {
    return this.name;
  }

  public getModel() {
    return this.model;
  }

  public getOilChange() {
    return this.oilChange;
  }

  public getOilFilter() {
    return this.oilFilter;
  }

  public getCc() {
    return this.cc;
  }

  public getBodyLink() {
    return this.bodyLink;
  }

  public getPurchaseDate() {
    return this.purchaseDate;
  }
}