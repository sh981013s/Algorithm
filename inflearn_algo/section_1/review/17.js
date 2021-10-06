'use strict';

(function () {
	const input = `5
good
time
good
time
student`;

	let ans = [];

	const realInput = input.split('\n');

	const N = parseInt(realInput.shift());

	for (let word of realInput) {
		if (!ans.includes(word)) {
			ans.push(word);
		}
	}
	ans = ans.join('\n');
	console.log(ans);
})();
