import HaveBikeForm from "../HaveBikeForm";
import IValidator from "./IValidator";
import SingleValidator from "./SingleValidator";

export default class HaveBikeValidator implements IValidator {
  private form: HaveBikeForm;
  private constructor(form: HaveBikeForm) {
    this.form = form;
  }

  static create(form: HaveBikeForm) {
    return new HaveBikeValidator(form);
  }

  public isValid(): boolean {
    return SingleValidator.isDate(this.form.date);
  }

  public isInvalid(): boolean {
    return !this.isValid();
  }
}