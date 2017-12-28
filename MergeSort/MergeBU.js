// sorting an array using bottom-up mergesort

// stably merge a[lo .. mid] wtih a[mid + 1 .. hi] using aux[lo .. hi]
function merge(a, aux, lo, mid, hi) {
  // copy to aux
  for (var k = lo; k <= hi; k++) {
    aux[k] = a[k];
  }

  // merge back to a[]
  var i = lo;
  var j = mid + 1;
  for (var k = lo; k <= hi; k++) {
    var cmp = compare(aux[j], aux[i]);
    if (i > mid) a[k] = aux[j++];
    else if (j > hi) a[k] = aux[i++];
    else if (cmp < 0) a[k] = aux[j++];
    else a[k] = aux[i++];
  }
}

// change compare function if sorting different data types of array
function compare(x, y) {
  return x - y;
}

// rearranges the array in ascending order, using the natural order
function sort(arr) {
  var n = arr.length;
  var aux = new Array(n);

  for (var len = 1; len < n; len = len + len) {
    for (var lo = 0; lo < n - len; lo += len + len) {
      var mid = lo + len - 1;
      var hi = Math.min(lo + len + len - 1, n - 1);
      merge(arr, aux, lo, mid, hi);
    }
  }
}

module.exports = sort;
