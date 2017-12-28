// Sorting an number array using Selection Sort in ascending order
function SelectionSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    // min index
    var min = i;
    for (var j = i + 1; j < n; j++) {
      var cmp = compare(arr[j], arr[min]);
      if (cmp < 0) {
        min = j;
      }
    }
    swap(arr, i, min);
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

module.exports = SelectionSort;
