'use strict';

(function () {
	const input = `ksekkset`;

	let ans = '';

	for (let char of input) {
		if (!ans.includes(char)) {
			ans += char;
		}
	}

	console.log(ans);
})();
