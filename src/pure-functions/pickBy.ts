import Values from '../types/Values';
import { identify } from './index';

const pickBy = <Obj>(obj: Obj, callback: (val: Values<Obj>, key: keyof Obj) => any = identify) => Object.fromEntries(
  Object.entries(obj).filter(([key, val]) => callback(val, key as any)),
);

export default pickBy;
