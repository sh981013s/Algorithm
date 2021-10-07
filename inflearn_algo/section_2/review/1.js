'use strict';

(function () {
	const input = `6
7 3 9 5 6 12`;

	let realInput = input.split('\n');
	realInput.shift();
	realInput = realInput.toString().split(' ').map(Number);

	let ans = [];
	let cur = Number.MIN_SAFE_INTEGER;

	for (let num of realInput) {
		if (num > cur) {
			ans.push(num);
		}
		cur = num;
	}
	console.log(ans.join(' '));
})();
