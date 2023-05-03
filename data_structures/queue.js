/* Queue is a FIFO data structure.  */

class Queue {
	constructor() {
		this.items = [];
	}
	enqueue(element) {
		this.items.push(element);
	}
	dequeue() {
		return this.items.shift();
	}
	isEmpty() {
		return this.items.length === 0;
	}
	peek() {
		if(!this.isEmpty()) {
			return this.items[0];
		}
		return null;
	}
	size() {
		return this.items.length;
	}
	print() {
		console.log(this.items.toString());
	}
}


const q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.print();
q.enqueue('c');
console.log(q.dequeue());
console.log(q.size());
console.log(q.peek());
q.print();
