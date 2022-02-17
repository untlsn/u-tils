import Values from '../types/Values';

const pickBy = <Obj>(obj: Obj, callback: (val: Values<Obj>, key: keyof Obj) => any = v => v) => Object.fromEntries(
  Object.entries(obj).filter(([key, val]) => callback(val, key as any)),
);

export default pickBy;
