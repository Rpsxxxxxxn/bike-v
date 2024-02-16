import UserForm from "../UserForm";
import IValidator from "./IValidator";

export default class UserValidator implements IValidator {
  private form: UserForm;

  private constructor(form: UserForm) {
    this.form = form;
  }

  public isValid(): boolean {
    if (this.form.username.length < 3) {
      return false;
    }

    if (this.form.email.length < 3) {
      return false;
    }

    if (this.form.password.length < 3) {
      return false;
    }

    return true;
  }
  public isInvalid(): boolean {
    return !this.isValid();
  }

  static create(form: UserForm) {
    return new UserValidator(form);
  }
}