import { faker } from '@faker-js/faker';
import * as U from '../src/index';


describe('identify', () => {
  it('should return first argument', () => {
    const val = faker.name.firstName();
    expect(U.identify(val)).toBe(val);
  });
});
