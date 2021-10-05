'use strict';

(function () {
	const fs = require('fs');
	const input = fs.readFileSync('input.txt').toString().trim().split('\n');

	let base = input[1].split(' ').map(Number);

	let target = input[3].split(' ').map(Number);

	base = new Set(base);
	base = Array.from(base);
	base.sort((a, b) => a - b);

	const binarySearch = (array, target, start, end) => {
		let mid = -1;
		while (start <= end) {
			mid = Math.floor((start + end) / 2);
			if (array[mid] === target) {
				return mid;
			} else if (array[mid] > target) {
				end = mid - 1;
			} else {
				start = mid + 1;
			}
		}
		return -1;
	};

	let ans;
	ans = [];

	target.forEach((elem) => {
		if (binarySearch(base, elem, 0, base.length - 1) !== -1) {
			ans.push(1);
		} else {
			ans.push(0);
		}
	});
	console.log(ans.join('\n'));
})();
