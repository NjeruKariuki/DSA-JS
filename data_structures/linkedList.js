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
	//insert method
	insert(value, index) {
		if(index < 0 || index > this.size) {
			return
		}
		if(index === 0) {
			this.prepend(value);
		} else {
			const node = new Node(value);
			let prev = this.head;
			for(let i=0;i < index-1; i++) {
				prev = prev.next;
			}
			node.next = prev.next;
			prev.next = node;
			this.size++
		}
	}
	//add node at back
	append(value){
		const node = new Node(value);
		if(this.isEmpty()){
			this.head = node;
		} else {
			let prev = this.head;
			while(prev.next){
				prev = prev.next;
			}
			prev.next = node;
		}
		this.size++;
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
	//remove at given index
	removeItem(index){
		if(index < 0 || index >= this.size) {
			return null;
		}
		//remove from first node
		let removedNode;
		if(index === 0) {
			removedNode = this.head;
			this.head = this.head.next;
		} else {
			let prev = this.head;
			for(let i=0; i < index-1; i++) {
				prev = prev.next;
			}
			removedNode = prev.next;
			prev.next = removedNode.next;
		}
		this.size--;
		return removedNode.value;

	}
	//remove node given its value
	/*
	removeValue(value) {
		if(this.isEmpty()) {
			return null;
		} else {
			let prev = this.head;
			while(prev.next){
				let tempNode = prev;
				prev = prev.next;
				if(prev.value === value){
					let removedNode = prev;
					tempNode.next = prev.next;
					console.log('Removed ', removedNode);
					this.size--;

				}
			}
		}
	} */
	removeValue(value) {
		if(this.isEmpty()){
			return null;
		}
		if (this.head.value === value) {
			this.head = this.head.next;
			this.size--;
			return value;
		} else {
			let prev = this.head;
			while(prev.next && prev.next.value !== value) {
				prev = prev.next;
			}
			if(prev.next){
				let removedNode = prev.next;
				prev.next = removedNode.next;
				this.size--;
				return value;
			}
			return null;
		}
	}
	search(value){
		if(this.isEmpty()){
			return -1;
		}
		let i = 0;
		let curr = this.head;
		while(curr) {
			if(curr.value === value){
				return i;
			}
			curr = curr.next;
			i++;
		}
		return -1;
	}
	reverse(){
		let prev = null;
		let curr = this.head;
		while(curr){
			let next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		this.head = prev;
	}
	print() {
		if(this.isEmpty()) {
			console.log("list is empty");
		} else {
			let curr = this.head;
			let listValues = '';
			while(curr) {
				listValues+= `${curr.value} `;
				curr = curr.next;
			}
			console.log(listValues);
		}

	}
}


const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(40);
list.prepend(80);
list.append(90);
list.insert(67, 4);
list.append(39);
list.prepend(10);
list.prepend(50);
list.print();
list.removeValue(10);
list.print();
console.log(list.search(39));
list.reverse();
list.print();
