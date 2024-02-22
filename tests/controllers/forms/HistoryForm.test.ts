import HistoryForm from '../../../src/controllers/forms/HistoryForm';

describe('HistoryForm', () => {
  it('初期化', () => {
    const form: HistoryForm = {
      bikeName: '試験バイク',
      title: '試験タイトル',
      description: '試験説明',
      odo: 1000,
      price: 1000,
      date: new Date()
    };
    expect(form.bikeName).toBe('試験バイク');
    expect(form.title).toBe('試験タイトル');
    expect(form.description).toBe('試験説明');
    expect(form.odo).toBe(1000);
    expect(form.price).toBe(1000);
    expect(form.date).toBeInstanceOf(Date);
  });
});