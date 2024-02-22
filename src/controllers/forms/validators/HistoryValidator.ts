import HistoryForm from "../HistoryForm";
import IValidator from "./IValidator";
import SingleValidator from "./SingleValidator";

export default class HistoryValidator implements IValidator {
  private form: HistoryForm;

  private constructor(form: HistoryForm) {
    this.form = form;
  }

  static create(form: HistoryForm) {
    return new HistoryValidator(form);
  }

  public isValid() {
    return !SingleValidator.isNullOrEmpty(this.form.bikeName)
    && !SingleValidator.isNullOrEmpty(this.form.title)
    && !SingleValidator.isNullOrEmpty(this.form.description)
    && !SingleValidator.isNullOrZero(this.form.odo)
    && SingleValidator.isNumber(this.form.price)
    && !SingleValidator.isNullOrZero(this.form.price)
    && !SingleValidator.isNullOrUndefined(this.form.date)
  }

  public isInvalid() {
    return !this.isValid();
  }
}