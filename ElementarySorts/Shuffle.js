// Knuth shuffling algorithm for randomly shuffling an array
function Shuffle(arr) {
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

module.exports = Shuffle;
