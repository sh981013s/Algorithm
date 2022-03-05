'use strict';

(function () {
	const fs = require('fs');
	const input = fs
		.readFileSync('input.txt')
		.toString()
		.trim()
		.split(' ')
		.map(Number);

	let i = input[0];
	let j = input[1];

	while (i % j !== 0) {
		let n = i % j;
		if (n !== 0) {
			i = j;
			j = n;
		}
	}
	console.log(j);
	console.log((input[0] * input[1]) / j);
})();
