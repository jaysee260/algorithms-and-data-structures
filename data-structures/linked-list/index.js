var LinkedList = require('./LinkedList');
var Node = require('./LinkedListNode');

function Individual(name, rel) {
  this.name = name;
  this.rel = rel;
};

var myList = new LinkedList();
var family = [
  new Individual("Juan Carlos", "self"),
  new Individual("Carissa", "wife"),

  new Individual("Charlie", "bf"),
  new Individual("Juanjo", "bf2"),
  new Individual("Fernando", "bf3"),

  new Individual("Raul", "grandfather"),
  new Individual("Carolina", "grandmother"),

  new Individual("Eugenia", "grandmother"),
  
  new Individual("Juan Carlos", "father"),
  new Individual("Sandra", "mother"),
  new Individual("Andrea", "sister"),

  new Individual("Sergio", "cousin"),
  new Individual("Nicole", "cousin"),
  new Individual("Karla", "cousin"),

  new Individual("Daniel", "cousin"),
  new Individual("Nicholas", "cousin"),
  new Individual("Erika", "cousin"),

  new Individual("Isabel", "cousin"),
  new Individual("Juliana", "cousin"),
];

for (let member of family)
  myList.append(member);

console.log(myList);