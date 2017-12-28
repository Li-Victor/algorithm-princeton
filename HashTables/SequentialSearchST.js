// Singly-linked list and sequential search
// to represent an (unordered symbol table) of generic key-value pairs.

function SequentialSearchST() {
  var n = 0;
  var first = null;

  function Node(key, val, next) {
    var key = key;
    var val = val;
    var next = next;

    return {
      key,
      val,
      next
    };
  }

  // returns true if this symbol table is empty.
  function contains(key) {
    return get(key) !== null;
  }

  // returns the value associated with the given key in this symbol table.
  function get(key) {
    for (var x = first; x !== null; x = x.next) {
      if (equals(key, x.key)) return x.val;
    }
    return null;
  }

  // inserts the specified key-value pair into the symbol table, overwriting the old
  // value with the new value if the symbol table already contains the specified key.
  function put(key, val) {
    for (var x = first; x !== null; x = x.next) {
      if (equals(key, x.key)) {
        x.val = val;
        return;
      }
    }

    first = Node(key, val, first);
    n++;
  }

  // removes the specified key and its associated value from this symbol table
  // (if the key is in this symbol table).
  function deleteKey(key) {
    first = deleteSpecifiedKey(first, key);
  }

  // delete key in linked list beginning at Node x
  // warning: function call stack too large if table is large
  function deleteSpecifiedKey(x, key) {
    if (x === null) return null;
    if (equals(key, x.key)) {
      n--;
      return x.next;
    }
    x.next = deleteSpecifiedKey(x.next, key);
    return x;
  }

  // compares the keys, which is a string
  function equals(x, y) {
    return x.localeCompare(y) === 0;
  }

  // array of the sequential keys
  function printKey() {
    var arr = [];
    for (var x = first; x !== null; x = x.next) {
      arr.push(x.key);
    }
    return arr;
  }

  // array of the sequential values
  function printVal() {
    var arr = [];
    for (var x = first; x !== null; x = x.next) {
      arr.push(x.val);
    }
    return arr;
  }

  return {
    contains,
    get,
    put,
    deleteKey,
    printKey,
    printVal
  };
}

module.exports = SequentialSearchST;
