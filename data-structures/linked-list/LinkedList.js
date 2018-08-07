'use strict';

const Node = require('./LinkedListNode');

function LinkedList() {
  this.head = null;
  this.tail = null;

  /**
   * @returns {void}
   * @param {*} data
   * @name append
   */
  this.append = function(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = new Node(data);
  }

  /**
   * @returns {void}
   * @param {*} data
   * @name prepend
   */
  this.prepend = function(data) {
    let newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  /**
   * @returns {void}
   * @param {*} data
   * @name deleteNodeWithValue
   */
  this.deleteNodeWithValue = function(data) {
    if (this.head == null) return;
    // If the Node we want to delete is the Head...
    if (this.head.data == data) {
      // Cut it out of the LinkedList
      this.head = this.head.next;
    }

    // Walk through the LinkedList
    // starting at the Head value
    let current = this.head;
    while (current.next !== null) {
      // If the next Node is the one we want
      // to delete, skip it.
      if (current.next.data == data) {
        current.next = current.next.next;
        return;
      }

      // Move on to the next element
      current = current.next;
    }
  }

}

module.exports = LinkedList;