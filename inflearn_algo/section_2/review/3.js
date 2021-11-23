(() => {
	const first = `5
2 3 3 1 3
1 1 2 2 3`;

	const input = first.toString().trim().split('\n');
	const n = Number(input.shift());
	const A = input[0].split(' ').map((a) => +a);
	const B = input[1].split(' ').map((a) => +a);

	for (let i in A) {
		if (A[i] === B[i]) {
			console.log('D');
		} else if (
			(A[i] === 1 && B[i] === 3) ||
			(A[i] === 2 && B[i] === 1) ||
			(A[i] === 3 && B[i] === 2)
		) {
			console.log('A');
		} else {
			console.log('B');
		}
	}
})();
