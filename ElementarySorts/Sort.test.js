const SelectionSort = require('./SelectionSort');
const InsertionSort = require('./InsertionSort');
const ShellSort = require('./ShellSort');
const Shuffle = require('./Shuffle');

describe('elementary sorts', () => {
  function testSort(sortFunction) {
    var arr = [9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    sortFunction(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }

  test('selection sort', () => {
    testSort(SelectionSort);
  });

  test('insertion sort', () => {
    testSort(InsertionSort);
  });

  test('shell sort', () => {
    testSort(ShellSort);
  });

  test('shuffle', () => {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    Shuffle(arr);
    Shuffle(arr2);

    expect(arr).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(arr2).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(arr).not.toEqual(arr2);
  });
});
