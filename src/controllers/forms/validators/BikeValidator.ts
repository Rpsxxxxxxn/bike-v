import BikeForm from "../BikeForm";
import IValidator from "./IValidator";
import SingleValidator from "./SingleValidator";

export default class BikeValidator implements IValidator {
  private form: BikeForm;
  private constructor(form: BikeForm) {
    this.form = form;
  }

  static create(form: BikeForm) {
    return new BikeValidator(form);
  }

  public isValid(): boolean {
    return !SingleValidator.isNullOrEmpty(this.form.name)
    && !SingleValidator.isNullOrEmpty(this.form.company)
    && !SingleValidator.isNullOrEmpty(this.form.oilChange)
    && !SingleValidator.isNullOrEmpty(this.form.oilFilter)
    && !SingleValidator.isNullOrEmpty(this.form.cc)
  }

  public isInvalid(): boolean {
    return !this.isValid();
  }
}