import { faker } from '@faker-js/faker';
import * as U from '../src/index';


describe('fromKeys', () => {
  it('should return object with keys', () => {
    const keys = U.times(10, () => faker.name.firstName());

    expect(Object.keys(U.fromKeys(keys))).toEqual(keys);
  });
  it('should map object value by key', () => {
    const keys = U.times(10, () => faker.name.firstName());

    expect(
      Object.values(U.fromKeys(keys, U.identity)),
    ).toEqual(keys);
  });
});
