import HaveBikeForm from '../../../../src/controllers/forms/HaveBikeForm';
import HaveBikeValidator from '../../../../src/controllers/forms/validators/HaveBikeValidator';

describe('HaveBikeValidator', () => {
  it('create', () => {
    const form: HaveBikeForm = {
      date: new Date()
    }
    const validator = HaveBikeValidator.create(form);
    expect(validator).toBeInstanceOf(HaveBikeValidator);
  });

  it('isValid', () => {
    const form: HaveBikeForm = {
      date: new Date()
    }
    const validator = HaveBikeValidator.create(form);
    expect(validator.isValid()).toBeTruthy();
  });

  it('isInvalid', () => {
    const form: any = {
      date: null
    }
    const validator = HaveBikeValidator.create(form);
    expect(validator.isInvalid()).toBeTruthy();
  });
});