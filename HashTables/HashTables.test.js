const SequentialSearchST = require('./SequentialSearchST');
const SeparateChainingHashST = require('./SeparateChainingHashST');
const LinearProbingHashST = require('./LinearProbingHashST');

describe('Sequential Search ST', () => {
  test('operations', () => {
    var text = 'SEARCHEXAMPLE';
    var st = SequentialSearchST();
    // using the character and the index of the character as key and value
    for (var i = 0; i < text.length; i++) {
      st.put(text.charAt(i), i);
    }

    expect(st.get('R')).toBe(3);
    expect(st.get('S')).toBe(0);
    expect(st.get('E')).toBe(12);
    expect(st.get('A')).toBe(8);

    expect(st.printKey()).toEqual([
      'L',
      'P',
      'M',
      'X',
      'H',
      'C',
      'R',
      'A',
      'E',
      'S'
    ]);

    expect(st.printVal()).toEqual([11, 10, 9, 7, 5, 4, 3, 8, 12, 0]);
    expect(st.contains('A')).toBe(true);
    expect(st.contains('Z')).toBe(false);
    st.deleteKey('Z');
    st.deleteKey('A');
    expect(st.contains('A')).toBe(false);
    expect(st.contains('Z')).toBe(false);
    expect(st.get('A')).toBe(null);
    expect(st.get('Z')).toBe(null);
  });
});

describe('Hash Tables', () => {
  function testHashTableImpl(st) {
    var text = 'SEARCHEXAMPLE';
    // using the character and the index of the character as key and value
    for (var i = 0; i < text.length; i++) {
      st.put(text.charAt(i), i);
    }

    expect(st.get('S')).toBe(0);
    expect(st.get('E')).toBe(12);
    expect(st.get('A')).toBe(8);
    expect(st.get('R')).toBe(3);
    expect(st.get('C')).toBe(4);
    expect(st.get('H')).toBe(5);
    expect(st.get('X')).toBe(7);
    expect(st.get('M')).toBe(9);
    expect(st.get('P')).toBe(10);
    expect(st.get('L')).toBe(11);

    expect(st.contains('A')).toBe(true);
    expect(st.contains('A')).toBe(true);
    expect(st.contains('Z')).toBe(false);
    st.deleteKey('Z');
    st.deleteKey('A');
    expect(st.contains('A')).toBe(false);
    expect(st.contains('Z')).toBe(false);
    expect(st.get('A')).toBe(null);
    expect(st.get('Z')).toBe(null);
  }

  test('using Separate Chaining', () => {
    var st = SeparateChainingHashST();
    testHashTableImpl(st);
  });

  test('using Linear Probing', () => {
    var st = LinearProbingHashST();
    testHashTableImpl(st);
  });
});
