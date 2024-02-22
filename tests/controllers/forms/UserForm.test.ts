import UserForm from '../../../src/controllers/forms/UserForm';

describe('UserForm', () => {
  it('初期化', () => {
    const form: UserForm = {
      username: '試験太郎',
      email: 'test@example.com',
      password: '123qwe',
      passwordConfirmation: '123qwe'
    };
    expect(form.username).toBe('試験太郎');
    expect(form.email).toBe('test@example.com');
    expect(form.password).toBe('123qwe');
    expect(form.passwordConfirmation).toBe('123qwe');
  });
});