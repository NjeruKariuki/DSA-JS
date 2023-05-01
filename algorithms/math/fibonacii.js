
//fibonacii
function fibonacii(n) {
	const fib = [0, 1];
	for(var i=2; i<n; i++){
		fib[i] = fib[i-1] + fib[i-2];
	}
	return fib;
}

var result = fibonacii(7);
console.log(result);
//console.log(nums);
