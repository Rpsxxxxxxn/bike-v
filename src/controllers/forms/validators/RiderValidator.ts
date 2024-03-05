import RiderForm from "../RiderForm";
import IValidator from "./IValidator";
import SingleValidator from "./SingleValidator";

export default class RiderValidator implements IValidator {
  private form: RiderForm;

  private constructor(form: RiderForm) {
    this.form = form;
  }

  static create(form: RiderForm) {
    return new RiderValidator(form);
  }

  public isValid(): boolean {
    return SingleValidator.isNumber(this.form.leftLeanAngle)
      && SingleValidator.isNumber(this.form.rightLeanAngle)
      && SingleValidator.isNumber(this.form.topSpeed)
      && this.form.leftLeanAngle >= 0
      && this.form.rightLeanAngle >= 0
      && this.form.topSpeed >= 0
      && this.form.topSpeed <= 999;
  }

  public isInvalid(): boolean {
    return !this.isValid();
  }
}