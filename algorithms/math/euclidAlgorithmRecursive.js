function euclidAlgorithmRecursive(A, B) {
	A = Math.abs(A);
	B = Math.abs(B);
	while(B !== 0) {
		while(A > B) {
			return euclidAlgorithmRecursive(A-B, B);
		}
		return euclidAlgorithmRecursive(A, B-A);
	}
	return A;
}

/* test with 1599, 650 , gcd === 13 */
console.log(euclidAlgorithmRecursive(1599, 650));
