(() => {
	const first = `10
1 0 1 1 1 0 0 1 1 0`;

	const input = first.toString().trim().split('\n');
	const N = Number(input.shift());
	const corrections = input[0].split(' ').map((a) => +a);

	let numToAdd = 1;
	let prevCorrect = false;
	let sum = 0;

	for (let i in corrections) {
		if (corrections[i] === 1) {
			if (prevCorrect === true) {
				numToAdd += 1;
				sum += numToAdd;
			} else {
				prevCorrect = true;
				sum += numToAdd;
			}
		} else {
			prevCorrect = false;
			numToAdd = 1;
		}
	}

	console.log(sum);
})();
