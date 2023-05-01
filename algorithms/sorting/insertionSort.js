function insertionSort(arr) {
	for(let i=1; i<arr.length; i++ ) {
		let numberToInsert = arr[i];  //for number to insert
		j = i - 1; //for sorted element
		while(j>=0 && arr[j] > numberToInsert) {
			arr[j+1] = arr[j];
			j = j - 1;
		}
		arr[j+1] = numberToInsert;
	}
}


arr = [-6, 3, 2, 11, 0, 3, 8, -1, 5];
//0(n^2); -> quadratic time
console.log(arr);
insertionSort(arr);
console.log(arr);

