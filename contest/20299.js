'use strict';

(function () {
	const fs = require('fs');
	const input = fs.readFileSync('input.txt').toString().trim().split('\n');

	const firstLine = input[0].split(' ').map(Number);
	const minSum = firstLine[1];
	const minEach = firstLine[2];

	input.shift();

	let teams = [];
	for (let team of input) {
		let a = team.split(' ').map(Number);
		teams.push(a);
	}

	let totalCount = 0;
	let teamSum = 0;
	let over = 1;
	let okay = [];

	for (let i = 0; i < teams.length; i++) {
		teamSum = 0;
		over = 1;
		for (let j = 0; j < teams[j].length; j++) {
			teamSum += teams[i][j];
			if (teams[i][j] < minEach) {
				over = 0;
			}
		}
		if (teamSum >= minSum && over === 1) {
			totalCount++;
			for (let k = 0; k < 3; k++) {
				okay.push(teams[i][k]);
			}
		}
	}

	console.log(totalCount);
	console.log(okay.join(' '));
})();
