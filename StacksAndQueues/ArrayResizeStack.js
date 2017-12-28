// last-in-first-out (LIFO) stack using arrays
// dynamic array which resizes
function ArrayResizeStack() {
  // start with an array size of 1
  var Arr = new Array(1);
  // N is the size of the stack, and the index of the empty slot of array
  var N = 0;

  // is the stack empty?
  function isEmpty() {
    return N === 0;
  }

  // resize the underlying array holding the elements
  function resize(capacity) {
    var copy = new Array(capacity);
    for (var i = 0; i < Arr.length; i++) {
      copy[i] = Arr[i];
    }
    Arr = copy;
  }

  // adds the item to this stack.
  function push(item) {
    // double size of array if necessary
    if (N === Arr.length) resize(2 * Arr.length);
    // add item
    Arr[N++] = item;
  }

  // removes and returns the item most recently added to this stakc.
  function pop() {
    if (isEmpty()) return null;
    var item = Arr[N - 1];
    Arr[N - 1] = null;
    N--;
    // shrink size of array if necessary
    // halve size of array when array is one quarter full
    if (N > 0 && N === Math.floor(Arr.length / 4))
      resize(Math.floor(Arr.length / 2));
    return item;
  }

  // retusn (but does not remove) the item most recently added to this stack.
  function peek() {
    if (isEmpty()) return null;
    return Arr[N - 1];
  }

  return {
    push,
    pop,
    peek
  };
}

module.exports = ArrayResizeStack;
