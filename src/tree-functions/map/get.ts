import get from '../../pure-functions/get';

function map_get<T, Key extends keyof T>(arr: T[], key: Key): T[Key]
function map_get<T, R = any>(arr: T[], key: string): R[]

function map_get<T, R>(arr: T[], key: string): R[] {
  return arr.map(val => get(val, key));
}

export default map_get;
