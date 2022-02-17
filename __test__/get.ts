import { faker } from '@faker-js/faker';
import * as U from '../src/index';

const obj = {
  prop: faker.name.firstName(),
  nested: {
    prop: faker.name.firstName(),
  },
};

describe('get', () => {
  it('should return prop', () => {
    expect(U.get(obj, 'prop')).toBe(obj.prop);
  });
  it('should return nested prop', () => {
    expect(U.get(obj, 'nested.prop')).toBe(obj.nested.prop);
  });
});
