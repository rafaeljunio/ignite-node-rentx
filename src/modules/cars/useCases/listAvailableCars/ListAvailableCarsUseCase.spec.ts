import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car1',
      description: 'Description Car',
      daily_rate: 100.0,
      license_plate: 'DEF-123455',
      fine_amount: 60,
      brand: 'Brand',
      category_id: 'category_id4',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Audi A3222',
      description: 'Description Car',
      daily_rate: 100.0,
      license_plate: 'DEF-1234',
      fine_amount: 60,
      brand: 'Car_brand_test',
      category_id: 'category_id2',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_brand_test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Audi A3',
      description: 'Description Car',
      daily_rate: 100.0,
      license_plate: 'DEF-1234',
      fine_amount: 60,
      brand: 'Car_brand_test222',
      category_id: 'category_id2',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Audi A3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Audi A322',
      description: 'Description Car',
      daily_rate: 100.0,
      license_plate: 'DEF-1234',
      fine_amount: 60,
      brand: 'Car_brand_test222',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: 'category_id',
    });

    expect(cars).toEqual([car]);
  });
});
