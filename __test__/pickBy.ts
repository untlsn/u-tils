import * as U from '../src/index';
import { faker } from '@faker-js/faker';

const trulyObject = {
  name: faker.name.firstName(),
  surname: faker.name.lastName(),
  age: faker.datatype.number({ max: 50 }),
  address: faker.address.streetAddress(),
};
const falsyObject = {
  isNull: null,
  isUndefined: undefined,
  isFalse: false,
  isEmpty: '',
};

const exampleObject = {
  ...trulyObject,
  ...falsyObject,
};

describe('pickBy', () => {
  it('should return same object if function always return true', () => {
    const sameObject = U.pickBy(exampleObject, () => true);

    expect(sameObject).toEqual(exampleObject);
  });
  it('should return empty object if function always retrn false', () => {
    const emptyObject = U.pickBy(exampleObject, () => false);
    expect(Object.keys(emptyObject).length).toBe(0);
  });
  it('should return object without falsy fields if callback is not set', () => {
    const objectWithoutFalsy = U.pickBy(exampleObject);
    expect(objectWithoutFalsy).toEqual(trulyObject);
  });
  it('should return correct object on custom callback', () => {
    const objectWithOnlyNumbers = U.pickBy(exampleObject, val => typeof val == 'number');
    expect(objectWithOnlyNumbers).toEqual({ age: exampleObject.age });
  });
});
