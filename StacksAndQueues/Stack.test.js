const StackLinkedList = require('./StackLinkedList');
const ArrayFixedStack = require('./ArrayFixedStack');
const ArrayResizeStack = require('./ArrayResizeStack');

describe('Stack Implementation', () => {
  function testStackImplementation(stack) {
    stack.push('to');
    stack.push('be');
    stack.push('or');
    stack.push('not');
    stack.push('to');

    expect('to').toEqual(stack.pop());

    stack.push('be');
    expect('be').toEqual(stack.pop());
    expect('not').toEqual(stack.pop());

    stack.push('that');

    expect('that').toEqual(stack.pop());
    expect('or').toEqual(stack.pop());
    expect('be').toEqual(stack.pop());
    expect('to').toEqual(stack.peek());
    expect('to').toEqual(stack.pop());
  }

  test('using Linked List', () => {
    var stack = StackLinkedList();
    testStackImplementation(stack);
  });

  test('using Fixed Array', () => {
    var stack = ArrayFixedStack(10);
    testStackImplementation(stack);
  });

  test('using resizing Array', () => {
    var stack = ArrayResizeStack();
    testStackImplementation(stack);
  });
});
