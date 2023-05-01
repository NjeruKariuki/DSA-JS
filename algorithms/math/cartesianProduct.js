function cartesianProduct(A, B) {
	let result = [];
	let i = 0;
	while(i < A.length) {
		for(let j = 0; j<B.length; j++) {
			result.push([A[i], B[j]]);
		}
		i = i+1;
	}
	return result;

}

A = [2, 3];
B = [4, 5];

res = cartesianProduct(A, B);
console.log(res);
			
