## DATA STRUCTURES Package based on JS data structures

## Installation

npm i ts-datastr
 
## Latest version

1.5.0

## Cointains

- Stack
- Deque
- Queue
- Linked List
- Doubly Linked List
- Sorted Linked List

## Examples

```javascript
import { Deque, Queue, Stack }  from 'ts-datastr'

const stack = new Stack();
const queue = new Queue();
const deque = new Deque();

stack.push(1);
queue.enqueue('foo');
queue.enqueue(12);
deque.addBack(32);
deque.addFront('foo');
deque.addBack('another string');


console.log(stack.toString()); // 1
console.log(stack.isEmpty());  // false
console.log(queue.size());     // 2
console.log(queue.toString()); // foo, 12
console.log(deque.toString()); // foo, 32, another string
```