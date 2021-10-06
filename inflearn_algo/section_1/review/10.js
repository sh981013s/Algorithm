(function () {
	const input = `COMPUTERPROGRAMMING
	R`;

	const realInput = input.toString().trim().split('\n');

	const sentence = realInput[0];
	const standard = realInput[1].trim();
	let ans = 0;

	for (let char of sentence) {
		if (char === standard) {
			ans++;
		}
	}

	console.log(ans);
})();
