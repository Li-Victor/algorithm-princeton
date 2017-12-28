// Symbol Table of generic key-value pairs.
// This implementation uses a linear probing hash table.

function LinearProbingHashST() {
  var m = 4; // size of linear probling table
  var n = 0; // number of key-value pairs in the symbol table
  var keys = []; // the keys
  var vals = []; // the values

  // returns the number of key-value pairs in this symbol table.
  function size() {
    return n;
  }

  // retusn true is this symbol table contains the specified key.
  function contains(key) {
    return get(key) !== null;
  }

  // hash function for keys - returns value between 0 and M - 1
  function hash(key) {
    return (key & 0x7fffffff) % m;
  }

  // resizes the hash table to the given capacity by re-hashing all of the keys
  function resize(capacity) {
    var tempKeys = [];
    var tempVals = [];
    for (var i = 0; i < m; i++) {
      if (keys[i] !== null) {
        var key = keys[i];
        var value = vals[i];
        // find new spot for key and value with the new capacity
        var j = (key & 0x7fffffff) % capacity;
        while (tempKeys[j] != null) {
          j = (j + 1) % capacity;
        }
        tempKeys[j] = key;
        tempVals[j] = value;
      }
    }
    m = capacity;
    keys = tempKeys;
    vals = tempVals;
  }

  // inserts the specified key-value pair into the symbol table, overwriting the old
  // value with the new value if the symbol table already contains the specified key.
  function put(key, val) {
    if (n >= Math.floor(m / 2)) resize(2 * m);
    var i;
    for (i = hash(key); keys[i] != null; i = (i + 1) % m) {
      if (equals(keys[i], key)) {
        vals[i] = val;
        return;
      }
    }
    keys[i] = key;
    vals[i] = val;
    n++;
  }

  // compares the keys, which is a string
  function equals(x, y) {
    return x.localeCompare(y) === 0;
  }

  function get(key) {
    for (var i = hash(key); keys[i] != null; i = (i + 1) % m) {
      if (equals(keys[i], key)) return vals[i];
    }
    return null;
  }

  // removes the specified key and its associated value from this symbol table
  // (if the key is in this symbol table).
  function deleteKey(key) {
    if (!contains(key)) return;

    var i = hash(key);
    while (!equals(key, keys[i])) {
      i = (i + 1) % m;
    }

    // delete key and associated value
    keys[i] = null;
    vals[i] = null;

    // rehash all keys in same cluster
    i = (i + 1) % m;

    while (keys[i] != null) {
      // delete keys[i] and vals[i] and reinsert
      var keyToRehash = keys[i];
      var valToRehash = vals[i];
      keys[i] = null;
      vals[i] = null;
      n--;
      put(keyToRehash, valToRehash);
      i = (i + 1) % m;
    }
    n--;

    // halves size of array if its 12.5 full or less
    if (n > 0 && n <= Math.floor(m / 8)) resize(Math.floor(m / 2));
  }

  return {
    contains,
    put,
    get,
    deleteKey
  };
}

module.exports = LinearProbingHashST;
