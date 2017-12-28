// sorting an array using heap sort with an array

// rearranges the array in ascending order, using the natural order
function HeapSort(arr) {
  var n = arr.length;
  for (var k = Math.floor(n / 2); k >= 1; k--) {
    sink(arr, k, n);
  }

  while (n > 1) {
    exch(arr, 1, n--);
    sink(arr, 1, n);
  }
}

function sink(arr, k, n) {
  while (2 * k <= n) {
    var j = 2 * k;
    // children of node at k are 2k and 2k + 1
    if (j < n && less(arr, j, j + 1)) j++;
    if (!less(arr, k, j)) break;
    exch(arr, k, j);
    k = j;
  }
}

function less(arr, i, j) {
  var cmp = compare(arr[i - 1], arr[j - 1]);
  return cmp < 0;
}

// change compare function if sorting different data types of array
function compare(x, y) {
  return x - y;
}

function exch(arr, i, j) {
  var temp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = temp;
}

module.exports = HeapSort;
