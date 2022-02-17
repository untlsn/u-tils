import { faker } from '@faker-js/faker';
import * as U from '../src/index';

const objs = U.times(10, U.constant({
  prop: faker.name.firstName(),
  nested: {
    prop: faker.name.firstName(),
  },
}));

describe('get', () => {
  it('should return prop', () => {

    expect(U.map.get(objs, 'prop')).toEqual(objs.map(it => it.prop));
  });
  it('should return nested prop', () => {
    expect(U.map.get(objs, 'nested.prop')).toEqual(objs.map(it => it.nested.prop));
  });
});
