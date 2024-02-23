import { before } from 'node:test';
import BikeRepositoryImpl from '../../../src/infrastructures/databases/BikeRepositoryImpl';
import SQLiteHelper from '../../../src/utils/SQLiteHelper';

describe('BikeRepositoryImpl', () => {
  before(async () => {
    await SQLiteHelper.create().createTable();
  })

  it('create', () => {
    const repository = BikeRepositoryImpl.create();
    expect(repository).toBeInstanceOf(BikeRepositoryImpl);
  });
});