// Unordered Array Max Priority Queue Implementation

function UnorderedMaxPQ(capacity) {
  var pq = new Array(capacity);
  // N is the index of the empty slot in array
  var N = 0;

  // returns true if this priority queue is empty.
  function isEmpty() {
    return N === 0;
  }

  // adds a new key to this priority queue
  function insert(x) {
    pq[N++] = x;
  }

  // retusn a largest key on this priority queue.
  function max() {
    var max = 0;
    for (var i = 1; i < N; i++) {
      var cmp = compare(pq[max], pq[i]);
      if (cmp < 0) max = i;
    }
    return pq[max];
  }

  // removes and retusn a largest key on this priority queue.
  function delMax() {
    var max = 0;
    for (var i = 1; i < N; i++) {
      var cmp = compare(pq[max], pq[i]);
      if (cmp < 0) max = i;
    }

    swap(pq, max, N - 1);
    // null out entry to prevent loitering
    var value = pq[--N];
    pq[N] = null;
    return value;
  }

  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // change compare function if sorting different data types of array
  function compare(x, y) {
    return x - y;
  }

  return {
    isEmpty,
    insert,
    max,
    delMax
  };
}

module.exports = UnorderedMaxPQ;
