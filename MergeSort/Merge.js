// Sorting an array using merge sort

// stably merge a[lo .. mid] with a[mid+1 .. hi] using aux[lo .. hi]
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

//  merge sort a[lo..hi] using auxiliary array aux[lo..hi]
function mergeSort(a, aux, lo, hi) {
  if (hi <= lo) return;
  var mid = Math.floor(lo + (hi - lo) / 2);
  mergeSort(a, aux, lo, mid);
  mergeSort(a, aux, mid + 1, hi);
  merge(a, aux, lo, mid, hi);
}

// rearranges the array in ascending order, using the natural order.
function sort(arr) {
  var aux = new Array(arr.length);
  mergeSort(arr, aux, 0, arr.length - 1);
}

module.exports = sort;
