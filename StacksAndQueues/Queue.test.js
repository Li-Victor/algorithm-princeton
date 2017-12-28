const QueueLinkedList = require('./QueueLinkedList');
const ArrayResizeQueue = require('./ArrayResizeQueue');

describe('Queue Implementation', () => {
  function testQueueImplementation(q) {
    q.enqueue('to');
    q.enqueue('be');
    q.enqueue('or');
    q.enqueue('not');
    q.enqueue('to');

    expect('to').toBe(q.dequeue());

    q.enqueue('be');

    expect('be').toEqual(q.dequeue());
    expect('or').toEqual(q.dequeue());

    q.enqueue('that');

    expect('not').toEqual(q.dequeue());
    expect('to').toEqual(q.dequeue());
    expect('be').toEqual(q.dequeue());
    expect('that').toEqual(q.peek());
    expect('that').toEqual(q.dequeue());
  }

  test('using Linked List', () => {
    var q = QueueLinkedList();
    testQueueImplementation(q);
  });

  test('using resizing Array', () => {
    var q = ArrayResizeQueue();
    testQueueImplementation(q);
  });
});
