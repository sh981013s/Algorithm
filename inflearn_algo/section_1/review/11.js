'use strict';

(function () {
	const input = `KoreaTimeGood`;
	let ans = 0;

	for (let char of input) {
		if (char === char.toUpperCase()) {
			ans++;
		}
	}

	console.log(ans);
})();
