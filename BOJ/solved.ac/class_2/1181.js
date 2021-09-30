'use strict';

(function () {
	const fs = require('fs');
	const input = fs.readFileSync('input.txt').toString().trim().split('\n');

	const words = input.slice(1, input.length);

	words.sort((a, b) => a.length - b.length || a.localeCompare(b));
	const wordsSet = new Set(words);
	const answer = Array.from(wordsSet).join('\n');
	console.log(answer);
})();
