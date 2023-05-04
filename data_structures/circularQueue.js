/*
 * Circular queue size is fixed. uses single block of memory.
 * First element connected to last element
 * Also called circular buffer or ring buffer. follows FIFO principle.
 * reuses the empty block created during the dequeue op
 * OPs:
 * 1. enqueue -> add elemnt to rear/tail of collection
 * 2. Dequeue -> remove elemnt from front/head of collection
 * 
 * USEs:
 * 1. traffic lights
 * 2. clock
 * 3. Streaming data
 */

class CircularQueue {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.currentLength = 0;
		this.rear = -1;
		this.front = -1;
	}

	isFull() {
		return this.currentLength === this.capacity;
	}
	isEmpty() {
		return this.currentLength === 0;
	}
	enqueue(element) {
		if(!this.isFull()){
			this.rear = (this.rear+1) % this.capacity;
			this.items[this.rear] = element;
			this.currentLength +=1;
			if(this.front === -1) {
				this.front = this.rear;
			}
		}
	}

	dequeue() {
		if(this.isEmpty()){
			return null;
		}
		const item = this.items[this.front];
		this.items[this.front] = null;
		this.front = (this.front+1) % this.capacity;
		this.currentLength -=1;
		if(this.isEmpty()){
			this.front = -1;
			this.rear = -1;
		}
		return item;
	}
	peek() {
		if(!this.isEmpty()) {
			return this.items[this.front];
		}
		return null;
	}	

	print() {
		if(this.isEmpty()) {
			console.log('Queue is empty');
		} else {
			let i;
			let str = ' ';
			for(i=this.front; i!== this.rear; i = (i+1) % this.capacity) {
				str += this.items[i] + '';
			}
			str += this.items[i];
			console.log(str);
		}
	}
}



const q = new CircularQueue(5);

console.log(q.isEmpty());
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.print());
q.enqueue(40);
q.enqueue(50);
console.log('removed ', q.dequeue());
console.log(q.peek());
console.log(q.isFull());
q.print();
