const pick = <Obj>(obj: Obj, ...pickKey: (keyof Obj | string)[]) => Object.fromEntries(
  Object.entries(obj).filter(([key]) => pickKey.includes(key)),
);

export default pick;
