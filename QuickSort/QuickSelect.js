// Given an array of N items, find the k-th smallest item
// Min (k = 0), max (k = N - 1), median (k = N / 2)
function select(arr, k) {
  // shuffle needed for performace guarenteed
  shuffle(arr);
  var lo = 0;
  var hi = arr.length - 1;
  while (hi > lo) {
    var j = partition(arr, lo, hi);
    if (j < k) lo = j + 1;
    else if (j > k) hi = j - 1;
    else return arr[k];
  }
  return arr[k];
}

function shuffle(arr) {
  var N = arr.length;
  for (var i = 0; i < N; i++) {
    var r = getRandomInt(i);
    swap(arr, i, r);
  }
}

// return random number from 0 to num
function getRandomInt(num) {
  return Math.floor(Math.random() * num);
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

// partition the subarray a[lo .. hi] so that a[lo .. j - 1] <= a[j] <= a[j+1 .. hi]
// and return the index j
function partition(arr, lo, hi) {
  var i = lo;
  var j = hi + 1;
  var v = arr[lo];

  while (true) {
    // find item on left to swap
    while (compare(arr[++i], v) < 0) {
      if (i === hi) break;
    }

    // find item on right to swap
    while (compare(v, arr[--j]) < 0) {
      if (j === lo) break;
    }

    // check if the pointers cross
    if (i >= j) break;

    swap(arr, i, j);
  }

  // put partitioning item v at a[j]
  swap(arr, lo, j);

  // no, a[lo .. j - 1] <= a[j] <= a[j+1 .. hi]
  return j;
}

module.exports = select;
