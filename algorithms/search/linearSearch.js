function linearSearch(arr, t) {
	for(let i=0; i< arr.length; i++){
		if(arr[i] === t){
			console.log("found element :", t , "at index: ", arr.indexOf(t));
			return arr.indexOf(t);
		}
	}
	return -1;
}

arr = [1, 2, 3, 4, 5, 6];
console.log(linearSearch(arr, 4));
console.log(linearSearch(arr, 6));

