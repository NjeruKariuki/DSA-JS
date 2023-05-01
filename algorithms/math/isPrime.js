

function isPrime(n){
	//prime num is natural no > 1 !== product of 2 smaller natural no.s)
	if(n < 2) {
		return false;
	}
	for(let i=2; i<=Math.sqrt(n); i++){
		if(n % i === 0){
			return false
		}
	}
	return true
}


for(let i=1; i<=100; i++){
	console.log(i, "is Prime: ", isPrime(i));
}
