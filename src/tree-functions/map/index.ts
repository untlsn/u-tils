import get from './get';
const map = <T, R>(arr: T[], callback: (val: T, index: number, arr: T[]) => R) => arr.map(callback);

map.get = get;
export default map;

