// first-in-first-out (FIFO) Queue implemented by linked list
function QueueLinkedList() {
  // keep reference to the first and last node
  var firstNode = null; // beginning of quueu
  var lastNode = null; // end of queue
  var N = 0; // number of elements on queue

  function Node(item, next) {
    var item = item;
    var next = next;

    return {
      item,
      next
    };
  }

  // check if linkedlist is empty
  function isEmpty() {
    return firstNode === null;
  }

  // adds the item to this queue
  function enqueue(item) {
    var oldLast = lastNode;
    lastNode = Node(item, null);

    if (isEmpty()) firstNode = lastNode;
    else oldLast.next = lastNode;
    N++;
  }

  // removes and retusn the item on this queue that was least recently added.
  function dequeue() {
    if (isEmpty()) return null;
    var item = firstNode.item;
    firstNode = firstNode.next;
    N--;
    // lastNode should be null if Queue is empty
    if (isEmpty()) lastNode = null; // avoid loitering
    return item;
  }

  function peek() {
    if (isEmpty()) return null;
    return firstNode.item;
  }

  return {
    enqueue,
    dequeue,
    peek
  };
}

module.exports = QueueLinkedList;
