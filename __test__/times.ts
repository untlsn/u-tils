import { faker } from '@faker-js/faker';
import * as U from '../src/index';


describe('times', () => {
  it('should create array from 0 until x', () => {
    const number = faker.datatype.number({ min: 1, max: 10 });
    const arr = U.times(number);
    for (let i = 0; i < number; i++) expect(arr).toContain(i);
  });
  it('should create array mapped by callback', () => {
    const number = faker.datatype.number({ min: 1, max: 10 });
    const arr = U.times(number, num => `num -> ${num}`);
    for (let i = 0; i < number; i++) expect(arr).toContain(`num -> ${i}`);
  });
});
