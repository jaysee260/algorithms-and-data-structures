const Node = require('./DoublyLinkedListNode');

function DoublyLinkedList() {
  this.head = null;
}

/**
 * @returns {void}
 * @param {DoublyLinkedListNode} data
 * @name append
 */
DoublyLinkedList.prototype.append = function(data) {
  if (this.head == null) {
    this.head = new Node(data);
    return;
  }

  let current = this.head;
  while(current.next !== null) {
    current = current.next;
  }

  current.next = new Node(data);
  current.next.prev = current;
}

/**
 * @returns {void || undefined}
 * @param {DoublyLinkedListNode} data
 * @name prepend
 */
DoublyLinkedList.prototype.prepend = function(data) {
  if (this.head == null) return;
  
  let newHead = new Node(data);
  newHead.next = this.head;
  this.head.prev = newHead;
  this.head = newHead;
}

DoublyLinkedList.prototype.deleteNodeWithValue = function(data) {
  // if the list is empty, we can't delete anything
  if (this.head == null) return;

  if (this.head.data == data) {
    this.head.next.prev = this.head.prev;
    this.head = this.head.next;
    /** @todo
     * FINISH WRITING THIS METHOD
     */
  }
}

// DoublyLinkedList.prototype.traverse = function(cb) {}

// DoublyLinkedList.prototype.traverseReverse = function(cb) {}

module.exports = DoublyLinkedList;