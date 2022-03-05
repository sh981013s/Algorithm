'use strict';

(function () {
	const fs = require('fs');
	const input = fs
		.readFileSync('input.txt')
		.toString()
		.trim()
		.split('\n')
		.map(Number);

	let answer = Array.from({ length: 10 }, (v) => 0);

	const result = input
		.reduce((acc, prev) => BigInt(acc) * BigInt(prev))
		.toString()
		.split('')
		.map(Number);

	for (let x of result) {
		answer[x]++;
	}

	console.log(answer.join('\n'));

	const a = 999999999 * 999999999 * 999999999;
	console.log(Math.pow(2, 53));
	console.log(Math.pow(2, 30));

	// 2의 10승 =- 1000
	// 2 20 승 100만
	//
})();
