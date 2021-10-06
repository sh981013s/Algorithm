'use strict';

(function () {
	const input = `StuDY`;
	let ans = '';

	for (let char of input) {
		if (char === char.toLowerCase()) {
			ans += char.toUpperCase();
		} else {
			ans += char.toLowerCase();
		}
	}

	console.log(ans);
})();
