'use strict';

(function () {
	const input = `8
130 135 148 140 145 150 150 153`;

	let realInput = input.split('\n');
	realInput.shift();
	realInput = realInput.toString().split(' ').map(Number);
	let cnt = 0;
	let height = 0;

	for (let student of realInput) {
		if (student > height) {
			cnt++;
			height = student;
		}
	}

	console.log(cnt);
})();
