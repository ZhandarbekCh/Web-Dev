//1.
// solution could be to add a property like message.isRead=true to a message after it’s read. 
//As messages objects are managed by another code, that’s generally discouraged, but we can use a symbolic property to avoid conflicts.

// the symbolic property is only known to our code
let isRead = Symbol("isRead");
messages[0][isRead] = true;

//2.
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
