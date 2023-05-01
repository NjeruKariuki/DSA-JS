class Stack {
	constructor() {
		this.items = [];
	}
	push(element) {
		this.items.push(element);
	}
	pop(){
		return this.items.pop();
	}
	peek() {
		return this.items[this.items.length - 1];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	size() {
		return this.items.length;
	}
	print() {
		console.log(this.items.toString());
	}
}


s = new Stack();

s.push(3);
s.peek();
s.print();
s.push(5);
s.print();
console.log(s.isEmpty());
console.log(s.peek());
