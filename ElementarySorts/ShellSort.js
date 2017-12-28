// Sorting an number array using Shell Sort in ascending order
function ShellSort(arr) {
  var n = arr.length;

  // 3x + 1 increment sequence 1, 4, 13, 40, 121, 364, 1093
  var h = 1;
  while (h < Math.floor(n / 3)) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    // h-sort array
    for (var i = h; i < n; i++) {
      for (var j = i; j >= h && compare(arr[j], arr[j - h]) < 0; j -= h) {
        swap(arr, j, j - h);
      }
    }

    h = Math.floor(h / 3);
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

module.exports = ShellSort;
