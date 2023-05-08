/*
 * Linked list is linear data str that includes a series of connected nodes
 * Each node has: Data and a pointer -> points to next node
 * List elements can be easily inserted or removed withouth reallocation or reorganization of the entire structure
 * Random access of elements is not feasible and accessing an element has linear time complexity
 * Supports 3 main ops:
 * 1. Insertion -> adding elemnt at beginning, end, or at a given index in the list.
 * 2. Deletion -> remove item given its index or value
 * 3. Search -> find an element given its value
 *
 * Use cases:
 * 1. applications of stacks and queues
 * 2. Image viewer
 */


class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}


class LinkedList{
	constructor(){
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}
	getSize() {
		return this.size;
	}
	//add node at front
	prepend(value) {
		const node = new Node(value);
		//when list is empty, add node to head, increment size by 1
		if(this.isEmpty()) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}
}


const list = new LinkedList();
list.prepend(10);
list.prepend(20);
console.log('List is empty? ', list.isEmpty());
console.log('list size:', list.getSize());

