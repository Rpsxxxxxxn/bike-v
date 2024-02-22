import UserForm from "../../../../src/controllers/forms/UserForm";
import UserValidator from "../../../../src/controllers/forms/validators/UserValidator"

describe('UserValidator', () => {
  it('create', () => {
    const form: UserForm = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    const validator = UserValidator.create(form);
    expect(validator).toBeInstanceOf(UserValidator);
  });

  it('isValid', () => {
    const form: UserForm = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    const validator = UserValidator.create(form);
    expect(validator.isValid()).toBeFalsy();
  });

  it('isInvalid', () => {
    const form: UserForm = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    const validator = UserValidator.create(form);
    expect(validator.isInvalid()).toBeTruthy();
  });
});
