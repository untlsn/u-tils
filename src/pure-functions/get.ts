function get<Obj, Key extends keyof Obj>(obj: Obj, key: Key): Obj[Key]
function get<Return>(obj: any, key: string): Return

function get<Return>(obj: object, key: string): Return {
  return key.split('.').reduce(
    (acc, cur) => acc[cur],
    obj,
  );
}

export default get;
