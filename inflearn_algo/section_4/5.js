'use strict';

(function () {
	const fs = require('fs');
	// const input = fs
	// 	.readFileSync('input.txt')
	// 	.toString()
	// 	.trim()
	// 	.split('\n')
	// 	.map(Number);

	const input = `10 3
13 15 34 23 45 65 33 11 26 42`;

	const realInput = input.split('\n');
	console.log(realInput);
	let bigNumb = realInput[0].toString().trim().split(' ').map(Number);
	bigNumb = bigNumb[1];
	const numbers = realInput[1].toString().trim().split(' ').map(Number);
	let sumOfNumbers = [];

	let sortedsums = new Set();

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			for (let k = j + 1; k < numbers.length; k++) {
				sortedsums.add(numbers[i] + numbers[j] + numbers[k]);
			}
		}
	}

	sortedsums = Array.from(sortedsums).sort((a, b) => b - a);

	console.log(sortedsums[bigNumb - 1]);
})();
