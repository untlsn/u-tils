import { faker } from '@faker-js/faker';
import * as U from '../src/index';


describe('identity', () => {
  it('should return first argument', () => {
    const val = faker.name.firstName();
    expect(U.identity(val)).toBe(val);
  });
});
