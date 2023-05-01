

function isPowerOfTwoBit(n){
	if (n < 1) {
		return false;
	}
	return (n & (n-1)) === 0
}


console.log(isPowerOfTwoBit(3));
console.log(isPowerOfTwoBit(8));
console.log(isPowerOfTwoBit(38));
