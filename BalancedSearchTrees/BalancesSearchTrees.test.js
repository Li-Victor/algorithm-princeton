const RedBlackBST = require('./RedBlackBST');

describe('Red Black Tree', () => {
  test('As Symbol Table', () => {
    var ST = RedBlackBST();
    var text = 'SEARCHEXAMPLE';
    // using the character and the index of the character as key and value
    for (var i = 0; i < text.length; i++) {
      ST.put(text.charAt(i), i);
    }

    expect(ST.get('R')).toBe(3);
    expect(ST.get('S')).toBe(0);
    expect(ST.get('E')).toBe(12);
    expect(ST.get('A')).toBe(8);
  });
});
