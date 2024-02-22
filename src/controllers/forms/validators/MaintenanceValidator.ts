import MaintenanceForm from "../MaintenanceForm";
import IValidator from "./IValidator";
import SingleValidator from "./SingleValidator";

export default class MaintenanceValidator implements IValidator {
  private form: MaintenanceForm;
  private constructor(form: MaintenanceForm) {
    this.form = form;
  }

  static create(form: MaintenanceForm) {
    return new MaintenanceValidator(form);
  }

  public isValid(): boolean {
    return !SingleValidator.isNullOrEmpty(this.form.bikeName)
      && !SingleValidator.isNullOrEmpty(this.form.title)
      && !SingleValidator.isNullOrEmpty(this.form.description)
      && !SingleValidator.isNullOrZero(this.form.odo)
      && SingleValidator.isNumber(this.form.price)
      && !SingleValidator.isNullOrZero(this.form.price)
      && !SingleValidator.isNullOrUndefined(this.form.date)
  }

  public isInvalid(): boolean {
    return !this.isValid();
  }
}