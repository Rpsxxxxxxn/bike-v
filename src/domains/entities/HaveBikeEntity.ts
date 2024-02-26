export default class HaveBikeEntity {
  private company: string;
  private name: string;
  private model: string;
  private oilChange: string;
  private oilFilter: string;
  private cc: number;
  private bodyLink: string;

  private constructor(
    company: string,
    name: string,
    model: string,
    oilChange: string,
    oilFilter: string,
    cc: number,
    bodyLink: string
  ) {
    this.company = company;
    this.name = name;
    this.model = model;
    this.oilChange = oilChange;
    this.oilFilter = oilFilter;
    this.cc = cc;
    this.bodyLink = bodyLink;
  }

  static create(
    company: string,
    name: string,
    model: string,
    oilChange: string,
    oilFilter: string,
    cc: number,
    bodyLink: string
  ) {
    return new HaveBikeEntity(company, name, model, oilChange, oilFilter, cc, bodyLink);
  }

  public getCompany(): string {
    return this.company;
  }

  public getName(): string {
    return this.name;
  }

  public getModel(): string {
    return this.model;
  }

  public getOilChange(): string {
    return this.oilChange;
  }

  public getOilFilter(): string {
    return this.oilFilter;
  }

  public getCc(): number {
    return this.cc;
  }

  public getBodyLink(): string {
    return this.bodyLink;
  }
}