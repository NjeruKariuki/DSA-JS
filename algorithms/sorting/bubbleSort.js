function bubbleSort(arr) {
	let swapppd;
	do{
		swappd = false;
	for(let i=0; i<arr.length-1; i++) {
		if(arr[i] > arr[i+1]) {
			let temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp
			swappd = true
		}
	}
	} while (swappd);
	return arr;
}



arr = [6, -4, 5, 3, -6, 12, 9]
console.log("not swapped: ", arr);
console.log("Sorted: ", bubbleSort(arr));

