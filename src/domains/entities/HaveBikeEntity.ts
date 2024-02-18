export default class HaveBikeEntity {
  company: string;
  name: string;
  model: string;
  oilChange: string;
  oilFilter: string;
  cc: number;

  private constructor(
    company: string,
    name: string,
    model: string,
    oilChange: string,
    oilFilter: string,
    cc: number
  ) {
    this.company = company;
    this.name = name;
    this.model = model;
    this.oilChange = oilChange;
    this.oilFilter = oilFilter;
    this.cc = cc;
  }

  static create(
    company: string,
    name: string,
    model: string,
    oilChange: string,
    oilFilter: string,
    cc: number
  ) {
    return new HaveBikeEntity(company, name, model, oilChange, oilFilter, cc);
  }
}