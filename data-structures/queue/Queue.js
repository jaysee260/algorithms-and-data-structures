function Queue() {

  function Node(data) {
    this.data = data;
    this.next = null;
  }

  this.head = null; // remove from the head
  this.tail = null; // add things here

  this.isEmpty = function() {
    return this.head === null;
  }

  this.peek = function() {
    return this.head.data;
  }

  this.add = function(data) {
    var node = new Node(data);
    if (this.tail !== null)
      this.tail.next = node;
    this.tail = node;

    if (this.head === null)
      this.head = node;
  }

  // remove from the head (front)
  this.remove = function() {
    const data = this.head.data;
    this.head = this.head.next;
    if (this.head === null)
      this.tail = null;

    return data;
  }

}

module.exports = Queue;