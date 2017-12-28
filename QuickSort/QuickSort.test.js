const Quick = require('./Quick');
const QuickSelect = require('./QuickSelect');
const Quick3Way = require('./Quick3Way');

describe('Quick sort', () => {
  test('using normal quick sort', () => {
    var arr = [9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    Quick(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('Quick select, finding the kth smallest element in array', () => {
    var arr = [0, 9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    // selecting the lowest number
    expect(QuickSelect(arr, 0)).toEqual(0);

    arr = [0, 9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    // selecting the second lowest number
    expect(QuickSelect(arr, 1)).toEqual(1);

    arr = [0, 9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    // selecting the higher number
    expect(QuickSelect(arr, arr.length - 1)).toEqual(10);

    arr = [0, 9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    // selecting the second higher number
    expect(QuickSelect(arr, arr.length - 2)).toEqual(9);

    arr = [0, 9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    // selecting the median number
    expect(QuickSelect(arr, Math.floor(arr.length / 2))).toEqual(5);
  });

  test('3 way Quick sort, useful for duplicate values in array', () => {
    var arr = [1, 0, 2, 2, 1, 2, 0, 1, 1, 2, 0, 1];
    Quick3Way(arr);
    expect(arr).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2]);
  });
});
