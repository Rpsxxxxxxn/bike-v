import { before } from 'node:test';
import BikeRepositoryImpl from '../../../src/infrastructures/databases/BikeRepositoryImpl';
import SQLiteHelper from '../../../src/utils/SQLiteHelper';

describe('BikeRepositoryImpl', () => {
  before(() => {
    const db = SQLiteHelper.create();
    db.createTable();
    db.close();
  })
  it('create', () => {
    const repository = BikeRepositoryImpl.create();
    expect(repository).toBeInstanceOf(BikeRepositoryImpl);
  });

  it('get', async () => {
    const repository = BikeRepositoryImpl.create();
    const result = await repository.get();
    expect(result).toBeInstanceOf(Object);
  });
});