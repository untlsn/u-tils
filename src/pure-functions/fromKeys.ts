import KeyType from '../types/Key';

function fromKeys<Key extends KeyType>(keys: Key[]): Record<Key, undefined>
function fromKeys<Key extends KeyType, Value>(keys: Key[], callback: (key: Key) => Value): Record<Key, Value>

function fromKeys<Key, Value>(keys: Key[], callback: (key: Key) => Value = () => undefined) {
  return Object.fromEntries(
    keys.map(key => [key, callback(key)]),
  );
}

export default fromKeys;
