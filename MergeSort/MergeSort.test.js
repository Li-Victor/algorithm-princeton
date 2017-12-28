const Merge = require('./Merge');
const MergeBU = require('./MergeBU');

describe('Merge sort Implementation', () => {
  function testSort(mergeSortAlg) {
    var arr = [9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    mergeSortAlg(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }

  test('using normal merge sort', () => {
    testSort(Merge);
  });

  test('using merge sort bottom up', () => {
    testSort(MergeBU);
  });
});
