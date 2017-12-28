// sorting an array using quicksort with 3-way partitioning
// Quick sort with duplicate entries is actually quadratic, so 3 way quick sort solves this problem

// rearranges the array in ascending order, using the natural order
function sort(arr) {
  shuffle(arr);
  QuickSort3Way(arr, 0, arr.length - 1);
}

// quicksort the subarray a[lo .. hi] using 3-way partitioning
function QuickSort3Way(arr, lo, hi) {
  if (hi <= lo) return;

  var lt = lo;
  var gt = hi;
  var v = arr[lo]; // use v for comparing
  var i = lo + 1;

  while (i <= gt) {
    var cmp = compare(arr[i], v);
    if (cmp < 0) swap(arr, lt++, i++);
    else if (cmp > 0) swap(arr, i, gt--);
    else i++;
  }

  // a[lo .. lt - 1] < v = a[lt .. gt] < a[gt+1 .. hi]
  QuickSort3Way(arr, lo, lt - 1);
  QuickSort3Way(arr, gt + 1, hi);
}

// change compare function if sorting different data types of array
function compare(x, y) {
  return x - y;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// shuffle array
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

module.exports = sort;
