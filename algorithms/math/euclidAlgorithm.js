function euclidAlgorithm(A, B) {
	A = Math.abs(A);
	B = Math.abs(B);
	while(B !== 0) {
		while(A > B) {
		A = A-B;
	}
B = B-A;
}
return A;
}

/* takes two args, returns the divisor */
console.log(euclidAlgorithm(1599, 650));
