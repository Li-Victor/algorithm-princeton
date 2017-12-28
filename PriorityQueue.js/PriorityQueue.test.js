const UnorderedMaxPQ = require('./UnorderedMaxPQ');
const MaxPQ = require('./MaxPQ');
const HeapSort = require('./HeapSort');

describe('Priority Queue', () => {
  function testPQ(pq) {
    expect(pq.isEmpty()).toBe(true);

    pq.insert(16);
    pq.insert(17);
    pq.insert(5);
    // 17 16 5

    expect(pq.delMax()).toBe(17);
    expect(pq.max()).toBe(16);
    expect(pq.isEmpty()).toBe(false);
    // 16 5

    pq.insert(24);
    pq.insert(1);
    pq.insert(13);
    // 24 16 13 5 1

    expect(pq.delMax()).toBe(24);
    expect(pq.max()).toBe(16);
    // 16 13 5 1

    pq.insert(16);
    pq.insert(12);
    pq.insert(5);
    // 16 16 13 12 5 5 1

    expect(pq.delMax()).toBe(16);
    expect(pq.delMax()).toBe(16);
    expect(pq.delMax()).toBe(13);
    expect(pq.delMax()).toBe(12);
    expect(pq.delMax()).toBe(5);
    // 5 1
  }

  test('using Unordered Max', () => {
    var pq = UnorderedMaxPQ(10);
    testPQ(pq);
  });

  test('using Max Binary Heap', () => {
    var pq = MaxPQ();
    testPQ(pq);
  });
});

describe('Heap Sort', () => {
  test('heap sort', () => {
    var arr = [9, 7, 1, 2, 4, 5, 6, 10, 8, 3];
    HeapSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
