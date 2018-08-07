'use strict';

const LinkedList = require('./LinkedList');

function LinkedListNode (data = '') {
  this.data = data;
  this.next = null;
}

module.exports = LinkedListNode;