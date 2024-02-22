import HistoryForm from '../../../../src/controllers/forms/HistoryForm'
import HistoryValidator from '../../../../src/controllers/forms/validators/HistoryValidator'

describe('HistoryValidator', () => {
  it('create', () => {
    const form: HistoryForm = {
      bikeName: '',
      title: '',
      description: '',
      odo: 0,
      price: 0,
      date: new Date()
    }
    const validator = HistoryValidator.create(form);
    expect(validator).toBeInstanceOf(HistoryValidator);
  });

  it('isValid', () => {
    const form: HistoryForm = {
      bikeName: '試験用バイク',
      title: 'オイル交換',
      description: 'オイルを交換しました。',
      odo: 1000,
      price: 2000,
      date: new Date()
    }
    const validator = HistoryValidator.create(form);
    expect(validator.isValid()).toBeTruthy();
  });

  it('isInvalid', () => {
    const form: HistoryForm = {
      bikeName: '',
      title: '',
      description: '',
      odo: 0,
      price: 0,
      date: new Date()
    }
    const validator = HistoryValidator.create(form);
    expect(validator.isInvalid()).toBeTruthy();
  });
});