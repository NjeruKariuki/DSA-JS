//power of 2 problem

function isPowerOfTwo(n){
	if(n === 1) return false
	for(let i=n; i>0; i--){
		if (2 ** i === n){
			return true;
		}
	}
return false;
}

console.log(isPowerOfTwo(3));
console.log(isPowerOfTwo(8));
