// Sorting an number array using Insertion Sort in ascending order
function InsertionSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    for (var j = i; j > 0; j--) {
      var cmp = compare(arr[j], arr[j - 1]);
      if (cmp < 0) swap(arr, j, j - 1);
    }
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// change compare function if sorting different data types of array
function compare(v, w) {
  return v - w;
}

module.exports = InsertionSort;
