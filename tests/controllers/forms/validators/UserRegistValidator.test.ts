import UserForm from '../../../../src/controllers/forms/UserForm';
import UserRegistValidator from '../../../../src/controllers/forms/validators/UserRegistValidator';

describe('UserRegistValidator', () => {
  it('create', () => {
    const form: UserForm = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    const validator = UserRegistValidator.create(form);
    expect(validator).toBeInstanceOf(UserRegistValidator);
  });

  it('isValid', () => {
    const form: UserForm = {
      username: '試験太郎',
      email: 'test@example.com',
      password: 'test12345',
      passwordConfirmation: 'test12345'
    }
    const validator = UserRegistValidator.create(form);
    expect(validator.isValid()).toBeTruthy();
  });

  it('isInvalid', () => {
    const form: UserForm = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
    const validator = UserRegistValidator.create(form);
    expect(validator.isInvalid()).toBeTruthy();
  });
});