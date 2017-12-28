// last-in-first-out (LIFO) stack using arrays
// only has a limited amount of space for array
function ArrayFixedStack(capacity) {
  // dont ever use new Array(), one arg makes the length equal to capacity
  var arr = new Array(capacity);
  // N is the size of the stack, and the index of the empty slot of array
  var N = 0;

  // check if stack is empty1
  function isEmpty() {
    return N === 0;
  }

  // adds item to this stack
  function push(item) {
    arr[N++] = item;
  }

  // removes and returns the item most recentrly added to this stack
  function pop() {
    // no loitering
    var item = arr[--N];
    arr[N] = null;
    return item;
  }

  // returns (but does not remove) the item most recentrly added to this stack.
  function peek() {
    if (isEmpty()) return null;
    // N is never 0, if it is not empty
    return arr[N - 1];
  }

  return {
    push,
    pop,
    peek
  };
}

module.exports = ArrayFixedStack;
