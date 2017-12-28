// Implementation of Stack using a Linked List

function StackLinkedList() {
  var firstNode = null; // top of the stack
  var n = 0; // size of the stakc

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

  // adds the item to this stack
  function push(item) {
    var oldFirstNode = firstNode;
    // replace first node with a new node
    firstNode = Node(item, oldFirstNode);
    n++;
  }

  // removes and returns the item most recentrly added to this stack
  function pop() {
    if (firstNode === null) return;
    // save item to return
    var item = firstNode.item;
    // move head node to the next
    firstNode = firstNode.next;
    return item;
  }

  // returns (but does not remove) the item most recentrly added to this stack.
  function peek() {
    if (isEmpty()) return null;
    return firstNode.item;
  }

  return {
    push,
    pop,
    peek
  };
}

module.exports = StackLinkedList;
