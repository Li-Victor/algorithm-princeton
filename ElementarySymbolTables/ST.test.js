const BinarySearchST = require('./BinarySearchST');
const BST = require('./BST');

describe('Symbol Table', () => {
  function testST(st) {
    var text = 'SEARCHEXAMPLE';
    // using the character and the index of the character as key and value
    for (var i = 0; i < text.length; i++) {
      st.put(text.charAt(i), i);
    }

    expect(st.get('R')).toBe(3);
    expect(st.get('S')).toBe(0);
    expect(st.get('E')).toBe(12);
    expect(st.get('A')).toBe(8);
  }

  test('using Binary Search', () => {
    var st = BinarySearchST();
    testST(st);
  });

  test('using BST', () => {
    var st = BST();
    testST(st);
  });
});

describe('BST operations', () => {
  var st;

  beforeEach(() => {
    st = BST();
    var text = 'SEXARCHM';
    for (var i = 0; i < text.length; i++) {
      st.put(text.charAt(i), i);
    }
  });

  describe('regular operations', () => {
    // min: returns the smallest key in the symbol table
    // max: returns the larget key in the symbol table
    test('min and max', () => {
      expect(st.min()).toBe('A');
      expect(st.max()).toBe('X');
    });

    // ceiling: returns the smallest key in the symbol table greater than or equal to the key given
    // floor: returns the largest key in the symbol table that is less than or equal to the key given
    test('floor and ceiling', () => {
      expect(st.floor('G')).toBe('E');
      expect(st.floor('D')).toBe('C');
      expect(st.ceiling('Q')).toBe('R');
    });

    // rank is how many keys < k
    test('rank', () => {
      expect(st.rank('C')).toBe(1);
      expect(st.rank('E')).toBe(2);
      expect(st.rank('F')).toBe(3);
      expect(st.rank('T')).toBe(7);
      expect(st.rank('Z')).toBe(8);
    });

    test('inorder traversal', () => {
      expect(st.inOrderTraversal()).toEqual([
        'A',
        'C',
        'E',
        'H',
        'M',
        'R',
        'S',
        'X'
      ]);
    });
  });

  describe('Delection operations', () => {
    test('deleteMin and deleteMax for BST', () => {
      st.deleteMin();
      expect(st.inOrderTraversal()).toEqual([
        'C',
        'E',
        'H',
        'M',
        'R',
        'S',
        'X'
      ]);

      st.deleteMin();
      expect(st.inOrderTraversal()).toEqual(['E', 'H', 'M', 'R', 'S', 'X']);

      st.deleteMax();
      expect(st.inOrderTraversal()).toEqual(['E', 'H', 'M', 'R', 'S']);

      st.deleteMax();
      expect(st.inOrderTraversal()).toEqual(['E', 'H', 'M', 'R']);
    });

    test('delete key in BST', () => {
      st.deleteSpecifiedKey('A');
      expect(st.inOrderTraversal()).toEqual([
        'C',
        'E',
        'H',
        'M',
        'R',
        'S',
        'X'
      ]);

      st.deleteSpecifiedKey('M');
      expect(st.inOrderTraversal()).toEqual(['C', 'E', 'H', 'R', 'S', 'X']);

      st.deleteSpecifiedKey('X');
      expect(st.inOrderTraversal()).toEqual(['C', 'E', 'H', 'R', 'S']);
    });
  });
});
