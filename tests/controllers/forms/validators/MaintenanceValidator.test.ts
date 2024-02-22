import MaintenanceForm from "../../../../src/controllers/forms/MaintenanceForm";
import MaintenanceValidator from "../../../../src/controllers/forms/validators/MaintenanceValidator";

describe('MaintenanceValidator', () => {
  it('create', () => {
    const form: MaintenanceForm = {
      bikeName: '',
      title: '',
      description: '',
      odo: 0,
      price: 0,
      date: new Date()
    }
    const validator = MaintenanceValidator.create(form);
    expect(validator).toBeInstanceOf(MaintenanceValidator);
  });

  it('isValid', () => {
    const form: MaintenanceForm = {
      bikeName: '試験用バイク',
      title: 'オイル交換',
      description: 'オイルを交換しました。',
      odo: 1000,
      price: 2000,
      date: new Date()
    }
    const validator = MaintenanceValidator.create(form);
    expect(validator.isValid()).toBeTruthy();
  });

  it('isInvalid', () => {
    const form: MaintenanceForm = {
      bikeName: '',
      title: '',
      description: '',
      odo: 0,
      price: 0,
      date: new Date()
    }
    const validator = MaintenanceValidator.create(form);
    expect(validator.isInvalid()).toBeTruthy();
  });
});