// Ordered Symbol Table of generic key-value pairs
// This implementation uses a sorted array.

// key: string, value: number
function BinarySearchST() {
  var keys = new Array(2);
  var values = new Array(2);
  var n = 0;

  function isEmpty() {
    return n === 0;
  }

  // Initializes an empty symbol table with the specified initial capacity
  function resize(capacity) {
    var tempK = new Array(capacity);
    var tempV = new Array(capacity);

    for (var i = 0; i < n; i++) {
      tempK[i] = keys[i];
      tempV[i] = values[i];
    }
    values = tempV;
    keys = tempK;
  }

  // Does this symbol table contain the given key?
  function contains(key) {
    return get(key) !== null;
  }

  // returns the value associated with the given key in this symbol table
  function get(key) {
    if (isEmpty()) return null;
    var i = rank(key);
    if (i < n && compare(keys[i], key) === 0) return values[i];
    return null;
  }

  // compare function for comparing key(string) values
  function compare(x, y) {
    return x.localeCompare(y);
  }

  // returns the number of keys in this symbol table strictly less than key
  function rank(key) {
    var lo = 0;
    var hi = n - 1;
    while (lo <= hi) {
      var mid = lo + Math.floor((hi - lo) / 2);
      var cmp = compare(key, keys[mid]);
      if (cmp < 0) hi = mid - 1;
      else if (cmp > 0) lo = mid + 1;
      else return mid;
    }
    return lo;
  }

  // inserts the specified key-value pair into the symbol table, overwriting the old
  // value with the new value if the symbol table already contains the specified key.
  function put(key, value) {
    var i = rank(key);

    // key is already in table
    if (i < n && compare(keys[i], key) === 0) {
      values[i] = value;
      return;
    }

    if (n === keys.length) resize(2 * keys.length);

    // insert new key-value pair
    for (var j = n; j > i; j--) {
      keys[j] = keys[j - 1];
      values[j] = values[j - 1];
    }
    keys[i] = key;
    values[i] = value;
    n++;
  }

  return {
    contains,
    isEmpty,
    get,
    put
  };
}

module.exports = BinarySearchST;
