const QuickFindUF = require('./QuickFindUF');
const QuickUnionUF = require('./QuickUnionUF');
const WeightedQuickUnionUF = require('./WeightedQuickUnionUF');
const PathCompressionUF = require('./PathCompressionUF');

describe('Union Find', () => {
  function testUnionFindImplementation(s) {
    s.union(4, 3);
    s.union(3, 8);
    s.union(6, 5);
    s.union(9, 4);
    s.union(2, 1);

    expect(s.connected(0, 7)).toBe(false);
    expect(s.connected(8, 9)).toBe(true);

    s.union(5, 0);
    s.union(7, 2);
    s.union(6, 1);
    s.union(1, 0);

    expect(s.connected(0, 7)).toBe(true);
  }

  test('using QuickFindUF', () => {
    var QuickFind = QuickFindUF(10);
    testUnionFindImplementation(QuickFind);
  });

  test('using QuickUnionUF', () => {
    var QuickUnion = QuickUnionUF(10);
    testUnionFindImplementation(QuickUnion);
  });

  test('using WeightedQuickUnionUF', () => {
    var WeightedQuickUnion = WeightedQuickUnionUF(10);
    testUnionFindImplementation(WeightedQuickUnion);
  });

  test('using PathCompressionUF', () => {
    var PathCompression = PathCompressionUF(10);
    testUnionFindImplementation(PathCompression);
  });
});
