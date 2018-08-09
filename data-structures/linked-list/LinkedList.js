'use strict';

const Node = require('./LinkedListNode');

function LinkedList() {
  this.head = null;
  // this.tail = null;
}

/**
 * @returns {void}
 * @param {LinkedListNode} data
 * @name append
 */
LinkedList.prototype.append = function(data) {
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
LinkedList.prototype.prepend = function(data) {
  let newHead = new Node(data);
  newHead.next = this.head;
  this.head = newHead;
}

/**
 * @returns {void}
 * @param {*} data
 * @name deleteNodeWithValue
 */
LinkedList.prototype.deleteNodeWithValue = function(data) {
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

/**
 * @returns {LinkedListNode || null}
 * @param {*} data
 * @name findNode
 */
LinkedList.prototype.findNode = function(data) {
  // If List is empty, return
  if (this.head == null) return;
  
  // If the head node is the node
  // we're looking for, return it
  if (this.head.data == data) {
    return this.head;
  }

  // Otherwise, walk through
  // the linked list and find
  // the node we're looking for
  let current = this.head;
  while(current.next !== null) {

    // If the next node is the one
    // we're looking for, return it
    if(current.next.data == data) {
      return current.next.data
    }

    current = current.next;
  }

  // If we don't find such a node,
  // return null
  return null;

}

/**
 * @returns {Number}
 * @name size
 * @description
 * Counts the # of Nodes in the
 * list and returns that count
 */
LinkedList.prototype.size = function() {
  if (this.head == null) return;

  let current = this.head;
  let count = 1;
  while(current.next !== null) {
    count++;
    current = current.next;
  }

  return count;
}

module.exports = LinkedList;