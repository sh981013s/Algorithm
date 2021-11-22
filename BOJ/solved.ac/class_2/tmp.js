(() => {
	const a = `4 11
802
743
457
539`;

	const input = a.toString().trim().split('\n');
	const [n, k] = input
		.shift()
		.split(' ')
		.map((a) => +a);
	const lines = input.map((a) => +a).sort();

	let min = 1;
	let max = Math.max(...lines);

	while (min <= max) {
		let mid = parseInt((min + max) / 2);
		let num = lines
			.map((line) => parseInt(line / mid))
			.reduce((a, b) => a + b, 0);
		if (num >= k) {
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}

	console.log(max);
})();
