
//factorial

function factorial(n){
	let result;
	if(n === 1){
		return n;
	}
	for(let i=n; i<=n; n--) {
		result = i * factorial(i-1);
	}
	return result;
}

res = factorial(0);

console.log(res);
