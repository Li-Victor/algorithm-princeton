// A symbol table of generic key-value pairs
// This implementation uses a separate chaining hash table.

const SequentialSearchST = require('./SequentialSearchST');

function SeparateChainingHashST() {
  var n = 0; // number of key-value pairs
  var m = 4; // hash table size, initially have hash table size of 4

  // initializes an empty symtol table with m chains
  var st = [
    SequentialSearchST(),
    SequentialSearchST(),
    SequentialSearchST(),
    SequentialSearchST()
  ];

  // resize the hash table to have the given number of chains,
  // rehashing all of tke keys.
  function resize(chains) {
    var temp = [];
    for (var i = 0; i < chains; i++) {
      temp[i] = SequentialSearchST();
    }

    for (var i = 0; i < m; i++) {
      var arr = st[i].printKey();
      arr.forEach(key => {
        var value = st[i].get(key);
        // new hash with new number of chains
        var j = (key & 0x7fffffff) % chains;
        temp[j].put(key, value);
      });
    }
    m = chains;
    st = temp;
  }

  // hash value between 0 and m - 1
  function hash(key) {
    return (key & 0x7fffffff) % m;
  }

  // returns the number of key-value pairs in this symbol table.
  function size() {
    return n;
  }

  // returns true if this symbol table contains the specified key
  function contains(key) {
    return get(key) !== null;
  }

  // returns the value associated with the specified key in this symbol table.
  function get(key) {
    var i = hash(key);
    return st[i].get(key);
  }

  // inserts the specified key-value pair into the symbol table, overwriting the old
  // value with the new value if the symbol table already contains the specified key.
  function put(key, value) {
    // double table size if average length of list >= 10
    if (n >= 10 * m) resize(2 * m);

    var i = hash(key);
    if (!st[i].contains(key)) n++;
    st[i].put(key, value);
  }

  function deleteKey(key) {
    var i = hash(key);
    if (st[i].contains(key)) n--;
    st[i].deleteKey(key);

    // halve table size if average length of list <= 2
    if (m > 4 && n <= 2 * m) resize(Math.floor(m / 2));
  }

  return {
    size,
    contains,
    get,
    put,
    deleteKey
  };
}

module.exports = SeparateChainingHashST;
