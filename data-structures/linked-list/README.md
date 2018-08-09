# Linked List

### Definition

A Linked List is a linear collection of data elements called Nodes. The order of the elements in a Linked List is not determined by their physical placement in memory; instead, each element _points_ to the next.

In its simplest form, a Node contains _some data_ AND a reference to the next Node in the sequence.

(In JavaScript, a Node might be represented like this)
```js
function Node(data) {
  this.data = data;
  this.next = null;
}
```

Simply put, a Linked List is a data structure consisting of a collection of Nodes that, altogether, represent a sequence; each Node stores a reference or _a link_ to the next Node in the sequence.

### Pros and Cons
The structure of a Linked List allows for efficient insertion or removal of elements from any position in the sequence.

A drawback of Linked Lists is that access time is linear. This means that, for instance, if we want to get to the last element of the list, we have to traverse through every element in the list to get there. Therefore, random access is not feasible.

This is what random access looks like when using an array; with random access, we can go straight to the last element of an array.
```js
var arr = [1,2,3, ..., 100]; // array of 100 elements
arr[arr.length - 1] // 100
```

This can't be done with a Linked List.

#### References

- [Data Structures: Linked Lists (video)][video]
- [JavaScript Algorithms/Linked List][github]
- [The Singly Linked List Data Structure][blog]
- [Linked List (wiki)][wiki]

[video]: https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8
[github]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list#linked-list
[blog]: http://blog.benoitvallon.com/data-structures-in-javascript/the-singly-linked-list-data-structure/
[wiki]: https://en.wikipedia.org/wiki/Linked_list