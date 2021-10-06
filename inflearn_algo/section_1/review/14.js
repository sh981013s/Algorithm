'use strict';

(function () {
	const input = `5
teacher
time
student
beautiful
good`;

	const realInput = input.split('\n');
	const N = parseInt(realInput.shift());

	let ans = realInput[0];

	for (let word of realInput) {
		if (word.length > ans.length) {
			ans = word;
		}
	}

	console.log(ans);
})();
