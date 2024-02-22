import BikeEntity from "../../../src/domains/entities/BikeEntity";

describe('BikeEntity', () => {
  let entity: BikeEntity = BikeEntity.create('1', 'company', 'name', 'model', 'oil_change', 'oil_filter', 'cc');

  it('create', () => {
    expect(entity).toBeInstanceOf(BikeEntity);
  })

  it('getId', () => {
    expect(entity.getId()).toBe('1');
  })

  it('getCompany', () => {
    expect(entity.getCompany()).toBe('company');
  })

  it('getName', () => {
    expect(entity.getName()).toBe('name');
  })

  it('getModel', () => {
    expect(entity.getModel()).toBe('model');
  })

  it('getOilChange', () => {
    expect(entity.getOilChange()).toBe('oil_change');
  })

  it('getOilFilter', () => {
    expect(entity.getOilFilter()).toBe('oil_filter');
  })

  it('getCc', () => {
    expect(entity.getCc()).toBe('cc');
  })
});