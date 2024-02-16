import History from "../HistoryForm";
import IValidator from "./IValidator";

export default class HistoryValidator implements IValidator {
  private form: History;

  private constructor(form: History) {
    this.form = form;
  }

  public isValid() {
    if (this.form.title === '' || this.form.title === null) {
      return false;
    }
    if (this.form.odo < 0) {
      return false;
    }
    return true;
  }

  public isInvalid() {
    return !this.isValid();
  }

  static create(form: History) {
    return new HistoryValidator(form);
  }
}