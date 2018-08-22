const Queue = require('./Queue');

const myQueue = new Queue();

myQueue.add(1);
myQueue.add(2);
myQueue.add(3);

// console.log(myQueue);
console.log(myQueue.remove());
console.log(myQueue.peek());
myQueue.add(5);

console.log(myQueue);
