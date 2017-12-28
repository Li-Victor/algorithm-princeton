// symbol table implemented using a left-leaning red-black BST
// This is the 2-3 version

function RedBlackBST() {
  // red means link nodes within a 3-node
  var RED = true;
  // black links connect 2-nodes and 3-nodes
  var BLACK = false;
  var root = null; // root of the BST

  // for creating a new node
  function Node(key, value, color, size) {
    var key = key;
    var value = value; // associated data
    var left = null; // left subtree
    var right = null; // right subtree
    var color = color;
    var size = size; // number of nodes in the subtree of this node
    return {
      left,
      right,
      key,
      value,
      size,
      color
    };
  }

  // is node x red; false if x is null ?
  function isRed(x) {
    if (x === null) return false;
    return x.color === RED;
  }

  // number of node in subtree rooted at x
  function size(x) {
    if (x === null) return 0;
    return x.size;
  }

  // returns the value associated with the given key
  // same as a normal binary search tree
  function get(key) {
    return getValue(root, key);
  }

  // value associated with the given key in subtree rooted at x; null if no such key
  function getValue(x, key) {
    while (x !== null) {
      var cmp = compareTo(key, x.key);
      if (cmp < 0) x = x.left;
      else if (cmp > 0) x = x.right;
      else return x.value;
    }
    return null;
  }

  // make a right-learning link h lean to the left
  function rotateLeft(h) {
    var x = h.right;
    h.right = x.left;
    x.left = h;
    x.color = x.left.color;
    x.left.color = RED;
    x.size = h.size;
    h.size = size(h.left) + size(h.right) + 1;
    return x;
  }

  // make a left-leaning link h lean to the right
  function rotateRight(h) {
    var x = h.left;
    h.left = x.right;
    x.right = h;
    x.color = x.right.color;
    x.right.color = RED;
    x.size = h.size;
    h.size = size(h.left) + size(h.right) + 1;
    return x;
  }

  // flip the colors of a node h and its two children
  function flipColors(h) {
    h.color = !h.color;
    h.left.color = !h.left.color;
    h.right.color = !h.right.color;
  }

  // inserts the specified key-value pair into the symbol table
  // overwriting the old value with the new value if the symbol table already contains the specified key.
  function put(key, value) {
    root = putValue(root, key, value);
    root.color = BLACK;
  }

  function putValue(h, key, value) {
    if (h === null) return Node(key, value, RED, 1);

    var cmp = compareTo(key, h.key);
    if (cmp < 0) h.left = putValue(h.left, key, value);
    else if (cmp > 0) h.right = putValue(h.right, key, value);
    else h.value = value;

    // fix-up any right-leaning links
    if (isRed(h.right) && !isRed(h.left)) h = rotateLeft(h);
    if (isRed(h.left) && isRed(h.left.left)) h = rotateRight(h);
    if (isRed(h.left) && isRed(h.right)) flipColors(h);
    return h;
  }

  // compare two nodes. There has to be a compare operation to compare the two nodes keys
  // for now, we are only comparing two string keys
  function compareTo(x, y) {
    return x.localeCompare(y);
  }

  return {
    put,
    get
  };
}

module.exports = RedBlackBST;
