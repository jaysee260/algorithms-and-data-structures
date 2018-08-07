var LinkedList = require('./LinkedList');
var Node = require('./LinkedListNode');

var myList = new LinkedList();
var myNode = new Node("Juan Carlos");

myList.append(myNode);
// myList.append(myNode);


console.log(myList);