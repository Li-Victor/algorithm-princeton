// sorting an array and selecting the ith smallest in an array using quicksort.

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

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// change compare function if sorting different data types of array
function compare(x, y) {
  return x - y;
}

// quicksort the subarray from a[lo] to a[hi]
function QuickSort(arr, lo, hi) {
  if (hi <= lo) return;
  var j = partition(arr, lo, hi);
  QuickSort(arr, lo, j - 1);
  QuickSort(arr, j + 1, hi);
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

// rearranges the array in ascending order, using the natural order
function sort(arr) {
  // shuffle needed for performace guarenteed
  shuffle(arr);
  QuickSort(arr, 0, arr.length - 1);
}

module.exports = sort;
