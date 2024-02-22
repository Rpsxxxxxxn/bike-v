import MaintenanceForm from "../MaintenanceForm";
import IValidator from "./IValidator";

export default class MaintenanceValidator implements IValidator {
  private form: MaintenanceForm;
  private constructor(
    form: any
  ) {
    this.form = form;
  }
  static create(
    form: any
  ) {
    return new MaintenanceValidator(form);
  }

  isValid(): boolean {
    if (this.form.date !== null) {
      return true;
    }
    if (this.form.odo > 0 && this.form.odo !== null) {
      return true;
    }
    return false;
  }
  isInvalid(): boolean {
    return !this.isValid();
  }
}