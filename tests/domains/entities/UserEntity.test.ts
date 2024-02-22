import UserEntity from '../../../src/domains/entities/UserEntity';

describe('UserEntity', () => {
  let entity: UserEntity = UserEntity.create(1, 'username', 'email', 'password');

  it('create', () => {
    expect(entity).toBeInstanceOf(UserEntity);
  })

  it('getId', () => {
    expect(entity.getId()).toBe(1);
  })

  it('getUsername', () => {
    expect(entity.getUsername()).toBe('username');
  })

  it('getEmail', () => {
    expect(entity.getEmail()).toBe('email');
  })

  it('getPassword', () => {
    expect(entity.getPassword()).toBe('password');
  })
});