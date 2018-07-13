const assert = require('assert');

const binary_search = require('./binary_search');

const myList = [1,3,5,7,9,12,14,16,19,23,45,67,89];

const searchOne = {
  item: 23,
  expectedResult: myList.indexOf(23)
};

const searchTwo = {
  item: 10,
  expectedResult: null
};

console.log(binary_search(myList, searchOne.item));
console.log(binary_search(myList, searchTwo.item));

assert.equal(binary_search(myList, searchOne.item), searchOne.expectedResult)
assert.equal(binary_search(myList, searchTwo.item), searchTwo.expectedResult)