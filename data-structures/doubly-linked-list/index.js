const DoublyLinkedList = require('./DoublyLinkedList');
const Node = require('./DoublyLinkedListNode');

const myDoublyLinkedList = new DoublyLinkedList();

myDoublyLinkedList.append("Juan Carlos");
myDoublyLinkedList.append("Carissa");
myDoublyLinkedList.prepend("Mr. Yeedurr");
myDoublyLinkedList.prepend("Merk merk");

console.log(myDoublyLinkedList.head);