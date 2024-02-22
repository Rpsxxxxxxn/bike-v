import BikeRepositoryImpl from '../../../src/infrastructures/databases/BikeRepositoryImpl';

describe('BikeRepositoryImpl', () => {
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