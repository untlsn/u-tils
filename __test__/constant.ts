import { faker } from '@faker-js/faker';
import * as U from '../src/index';

describe('constant', () => {
  it('should create function returning first value', () => {
    const value = faker.name.firstName();
    const returnValue = U.constant(value);

    expect(returnValue()).toBe(value);
  });
});
