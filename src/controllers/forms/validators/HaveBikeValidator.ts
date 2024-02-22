import HaveBikeForm from "../HaveBikeForm";
import IValidator from "./IValidator";

export default class HaveBikeValidator implements IValidator {
  private form: HaveBikeForm;
  private constructor(form: HaveBikeForm) {
    this.form = form;
  }
  static create(form: HaveBikeForm) {
    return new HaveBikeValidator(form);
  }

  isValid(): boolean {
    return this.form.date !== null;
  }
  isInvalid(): boolean {
    return !this.isValid();
  }
  
}