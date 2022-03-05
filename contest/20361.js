'use strict';

(function () {
	const fs = require('fs');
	const input = fs.readFileSync('input.txt').toString().trim().split('\n');

	const firstLine = input[0].toString().trim().split(' ').map(Number);

	const howManyCups = firstLine[0];
	const whereIsBall = firstLine[1];
	const howManyChange = firstLine[2];

	input.shift();

	let log = [];

	for (let change of input) {
		let a = change.split(' ').map(Number);
		log.push(a);
	}

	let field = [];

	for (let i = 1; i < howManyCups + 1; i++) {
		if (i === whereIsBall) {
			field.push(1);
		} else {
			field.push(0);
		}
	}

	let first = 0;
	let second = 0;

	for (let i = 0; i < log.length; i++) {
		first = log[i][0] - 1;
		second = log[i][1] - 1;
		if (field[first] === 1 || field[second] === 1) {
			let a = field[first];
			field[first] = field[second];
			field[second] = a;
		}
	}

	console.log(field.indexOf(1) + 1);
})();
