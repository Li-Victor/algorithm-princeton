// Resizing Array implementation of a queue

function ArrayResizeQueue() {
  // initialize an empty queue
  var q = new Array(2); // queue elements
  var n = 0; // number of elements on queue
  var first = 0; // index of first element of queue
  var last = 0; // index of next available slot

  // is the queue empty?
  function isEmpty() {
    return n === 0;
  }

  function resize(capacity) {
    var temp = new Array(capacity);

    // any empty slots from the beginning of the old queue, gets placed into the beginning of the new queue
    for (var i = 0; i < n; i++) {
      temp[i] = q[(first + i) % q.length];
    }

    q = temp;
    first = 0;
    last = n;
  }

  // adds the item to this queue
  function enqueue(item) {
    // double size of array if necessary and recopy to front of array
    if (n === q.length) resize(2 * q.length);
    q[last++] = item; // add item
    if (last === q.length) last = 0; // if it needs to wrap-around
    n++;
  }

  // removes and returns the item on this queue that was least recently added
  function dequeue() {
    if (isEmpty()) return null;
    var item = q[first];
    q[first] = null; // avoid loitering
    n--;
    first++;

    if (first === q.length) first = 0; // wrap-around
    if (n > 0 && n === Math.floor(q.length / 4))
      resize(Math.floor(q.length / 2));
    return item;
  }

  // returns the item least recently added to this queue.
  function peek() {
    if (isEmpty()) return null;
    return q[first];
  }

  return {
    enqueue,
    dequeue,
    peek
  };
}

module.exports = ArrayResizeQueue;
