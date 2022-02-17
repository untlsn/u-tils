import { faker } from '@faker-js/faker';
import * as U from '../src/index';


describe('pick', () => {
  it('should return picked keys', () => {
    const keys = U.times(10, () => faker.name.firstName());
    const obj = U.fromKeys(keys);
    const halfKeys = keys.slice(0, 5);
    const halfObject = U.fromKeys(halfKeys);

    expect(U.pick(obj, ...halfKeys)).toEqual(halfObject);
  });
});
