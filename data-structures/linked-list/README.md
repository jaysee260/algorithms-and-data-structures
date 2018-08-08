# Linked Lists

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

<!-- ### Pros and Cons -->

#### References

- [Data Structures: Linked Lists (video)][video]
- [JavaScript Algorithms/Linked List][github]
- [The Singly Linked List Data Structure][blog]
- [Linked List (wiki)][wiki]

[video]: https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8
[github]: https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list#linked-list
[blog]: http://blog.benoitvallon.com/data-structures-in-javascript/the-singly-linked-list-data-structure/
[wiki]: https://en.wikipedia.org/wiki/Linked_list