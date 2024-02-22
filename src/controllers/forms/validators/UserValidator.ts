import UserForm from "../UserForm";
import IValidator from "./IValidator";
import SingleValidator from "./SingleValidator";

export default class UserValidator implements IValidator {
  private form: UserForm;
  private constructor(form: UserForm) {
    this.form = form;
  }

  static create(form: UserForm) {
    return new UserValidator(form);
  }

  public isValid(): boolean {
    return SingleValidator.isEmail(this.form.email) 
        && SingleValidator.isLengthOver(this.form.password, 3);
  }

  public isInvalid(): boolean {
    return !this.isValid();
  }
}