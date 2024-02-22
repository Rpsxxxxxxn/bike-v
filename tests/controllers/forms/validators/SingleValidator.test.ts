import SingleValidator from "../../../../src/controllers/forms/validators/SingleValidator";

describe('SingleValidator', () => {
  it('isNullOrEmpty', () => {
    expect(SingleValidator.isNullOrEmpty('')).toBeTruthy();
    expect(SingleValidator.isNullOrEmpty('a')).toBeFalsy();
  });

  it('isNullOrZero', () => {
    expect(SingleValidator.isNullOrZero(0)).toBeTruthy();
    expect(SingleValidator.isNullOrZero(1)).toBeFalsy();
  });

  it('isNullOrUndefined', () => {
    expect(SingleValidator.isNullOrUndefined(null)).toBeTruthy();
    expect(SingleValidator.isNullOrUndefined(1)).toBeFalsy();
  });

  it('isNumber', () => {
    expect(SingleValidator.isNumber(1)).toBeTruthy();
    expect(SingleValidator.isNumber('a')).toBeFalsy();
  });

  it('isDate', () => {
    expect(SingleValidator.isDate(new Date())).toBeTruthy();
    expect(SingleValidator.isDate('a')).toBeFalsy();
  });

  it('isEmail', () => {
    expect(SingleValidator.isEmail('test@example.com')).toBeTruthy();
    expect(SingleValidator.isEmail('testexample.com')).toBeFalsy();
  });

  it('isPassword', () => {
    expect(SingleValidator.isPassword('12345678')).toBeTruthy();
    expect(SingleValidator.isPassword('1234567')).toBeFalsy();
  });

  it('isSame', () => {
    expect(SingleValidator.isSame('a', 'a')).toBeTruthy();
    expect(SingleValidator.isSame('a', 'b')).toBeFalsy();
  });

  it('isFutureDate', () => {
    expect(SingleValidator.isFutureDate(new Date('2020-01-01'))).toBeFalsy();
  });

  it('isBetweenDate', () => {
    expect(SingleValidator.isBetweenDate(new Date('2021-01-01'), new Date('2020-01-01'), new Date('2022-01-01'))).toBeTruthy();
    expect(SingleValidator.isBetweenDate(new Date('2019-01-01'), new Date('2020-01-01'), new Date('2022-01-01'))).toBeFalsy();
  });

  it('isLengthUnder', () => {
    expect(SingleValidator.isLengthUnder('a', 2)).toBeTruthy();
  });

  it('isLengthOver', () => {
    expect(SingleValidator.isLengthOver('a', 1)).toBeTruthy();
    expect(SingleValidator.isLengthOver('a', 2)).toBeFalsy();
  });
});