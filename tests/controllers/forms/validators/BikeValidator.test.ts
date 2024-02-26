import BikeForm from '../../../../src/controllers/forms/BikeForm';
import BikeValidator from '../../../../src/controllers/forms/validators/BikeValidator';

describe('BikeValidator', () => {
  it('create', () => {
    const form: BikeForm = {
      name: '',
      model: '',
      company: '',
      oilChange: '',
      oilFilter: '',
      cc: '',
      bodyLink: '',
    }
    const validator = BikeValidator.create(form);
    expect(validator).toBeInstanceOf(BikeValidator);
  });

  it('isValid', () => {
    const form: BikeForm = {
      name: '試験用バイク',
      model: 'ABC-123',
      company: '試験用会社',
      oilChange: '1.2',
      oilFilter: '1.0',
      cc: '999',
      bodyLink: '',
    }
    const validator = BikeValidator.create(form);
    expect(validator.isValid()).toBeTruthy();
  });

  it('isInvalid', () => {
    const form: BikeForm = {
      name: '',
      model: '',
      company: '',
      oilChange: '',
      oilFilter: '',
      cc: '',
      bodyLink: '',
    }
    const validator = BikeValidator.create(form);
    expect(validator.isInvalid()).toBeTruthy();
  });
});