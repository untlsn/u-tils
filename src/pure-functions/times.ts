function times(length: number): number[];
function times<Return>(length: number, mapCallback: (index: number) => Return): Return[]

function times<Return>(length: number, mapCallback?: (index: number) => Return) {
  const res = [];
  if (mapCallback) for (let i = 0; i < length; i++) res.push(mapCallback(i));
  else for (let i = 0; i < length; i++) res.push(i);
  return res as Return[];
}

export default times;
