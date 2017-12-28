// Unbalanced Binary Search Tree for a symbol table (key, value)
// change the compare function if you different types for key
// The keys are strings, and the values are numbers.
function BST() {
  // root of BST
  var root = null;

  function Node(key, value, size) {
    var left = null; // left subtree
    var right = null; // right subtree
    var key = key; // sorted by key
    var value = value; // associated data
    var size = size; // number of nodes in the subtree of this node
    return {
      left,
      right,
      key,
      value,
      size
    };
  }

  // return number of key-value pairs in BST rooted at x
  function size(x) {
    if (x === null) return 0;
    else return x.size;
  }

  // does this symbol table contain the given key?
  function contains(key) {
    return get(key) !== null;
  }

  // returns the value associated with the given key
  function get(key) {
    return getValue(root, key);
  }

  function getValue(x, key) {
    if (x === null) return null;
    var cmp = compare(key, x.key);
    if (cmp < 0) return getValue(x.left, key);
    else if (cmp > 0) return getValue(x.right, key);
    else return x.value;
  }

  // Inserts the specified key-value pair into the symbol table, overwriting the old
  // value with the new value if the symbol table already contains the specified key.
  function put(key, value) {
    root = putKeyValue(root, key, value);
  }

  function putKeyValue(x, key, value) {
    if (x === null) return Node(key, value, 1);
    var cmp = compare(key, x.key);
    if (cmp < 0) x.left = putKeyValue(x.left, key, value);
    else if (cmp > 0) x.right = putKeyValue(x.right, key, value);
    else x.value = value; // Change value for symbol table

    x.size = 1 + size(x.left) + size(x.right);
    return x;
  }

  // compare function for comparing key(string) values
  function compare(x, y) {
    return x.localeCompare(y);
  }

  // returns the smallest key in the symbol table
  function min() {
    return minKey(root).key;
  }

  function minKey(x) {
    if (x.left === null) return x;
    else return minKey(x.left);
  }

  // returns the larget key in the symbol table
  function max() {
    return maxKey(root).key;
  }

  function maxKey(x) {
    if (x.right === null) return x;
    else return maxKey(x.right);
  }

  // returns the largest key in the symbol table that is less than or equal to the key given
  function floor(key) {
    var x = floorKey(root, key);
    if (x === null) return null;
    else return x.key;
  }

  function floorKey(x, key) {
    if (x === null) return null;
    var cmp = compare(key, x.key);
    // Case 1: The floor of k is k.
    if (cmp === 0) return x;
    else if (cmp < 0) return floorKey(x.left, key); // Case 2: The floor of k is in the left subtree

    // Case 3: The floor of k is in the right subtree
    // if there is any key <= k in the right subtree
    // otherwise it is the key in the root
    var t = floorKey(x.right, key);
    if (t !== null) return t;
    else return x;
  }

  // returns the smallest key in the symbol table greater than or equal to the key given
  function ceiling(key) {
    var x = ceilingKey(root, key);
    if (x === null) return null;
    else return x.key;
  }

  function ceilingKey(x, key) {
    if (x === null) return null;
    var cmp = compare(key, x.key);
    if (cmp === 0) return x;
    if (cmp < 0) {
      var t = ceilingKey(x.left, key);
      if (t !== null) return t;
      else return x;
    }
    return ceilingKey(x.right, key);
  }

  // returns the number of keys less than the given key
  function rank(key) {
    return rankKey(key, root);
  }

  // number of keys in the subtree less than key.
  function rankKey(key, x) {
    if (x === null) return 0;
    var cmp = compare(key, x.key);
    if (cmp < 0) return rankKey(key, x.left);
    else if (cmp > 0) return 1 + size(x.left) + rankKey(key, x.right);
    else return size(x.left);
  }

  // returns array of the tree inorder
  function inOrderTraversal() {
    var queue = [];
    inOrderKeys(root, queue);
    return queue;
  }

  function inOrderKeys(x, queue) {
    if (x === null) return;
    inOrderKeys(x.left, queue);
    queue.push(x.key);
    inOrderKeys(x.right, queue);
  }

  // removes the smallest key and associated value from the symbol table
  function deleteMin() {
    root = deleteMinKey(root);
  }

  // go left until finding a node with a null left link.
  // replace that node by its right link.
  // update subtree counts
  function deleteMinKey(x) {
    if (x.left === null) return x.right;
    x.left = deleteMinKey(x.left);
    x.size = 1 + size(x.left) + size(x.right);
    return x;
  }

  // removes the largest key and associated value from the symbol table
  function deleteMax() {
    root = deleteMaxKey(root);
  }

  function deleteMaxKey(x) {
    if (x.right === null) return x.left;
    x.right = deleteMaxKey(x.right);
    x.size = 1 + size(x.left) + size(x.right);
    return x;
  }

  // removes the specified key and the associated value from the symbol table
  function deleteSpecifiedKey(key) {
    root = deleteKey(root, key);
  }

  function deleteKey(x, key) {
    // Case 0: Delete t by setting parent link to null
    if (x === null) return null;

    var cmp = compare(key, x.key);
    if (cmp < 0) x.left = deleteKey(x.left, key);
    else if (cmp > 0) x.right = deleteKey(x.right, key);
    else {
      // one child
      // Case 1: Delete t by replacing parent link
      if (x.right === null) return x.left;
      if (x.left === null) return x.right;

      // two child case
      // replace with successor
      // Case 2: Find successor x of t
      // Delete the minimum in t's right subtree
      // Put x in t's spot
      var t = x;
      x = min(t.right);
      x.right = deleteMin(t.right);
      x.left = t.left;
    }
    // update subtree counts
    x.size = size(x.left) + size(x.right) + 1;
    return x;
  }

  return {
    put,
    get,
    min,
    max,
    floor,
    ceiling,
    rank,
    inOrderTraversal,
    deleteMin,
    deleteMax,
    deleteSpecifiedKey,
    contains
  };
}

module.exports = BST;
