import BikeForm from "../BikeForm";
import IValidator from "./IValidator";

export default class BikeValidator implements IValidator {
  private form: BikeForm;
  private constructor(
    form: BikeForm
  ) {
    this.form = form;
  }
  static create(
    form: BikeForm
  ) {
    return new BikeValidator(form);
  }

  isValid(): boolean {
    if (this.form.name !== "" && this.form.name !== null) {
      return true;
    }
    if (this.form.company !== "" && this.form.company !== null) {
      return true;
    }
    return false;
  }
  isInvalid(): boolean {
    return !this.isValid();
  }
}