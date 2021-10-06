'use strict';

(function () {
	const input = 'good';
	let ans = '';

	const getMiddle = (x) => {
		if (x.length % 2 === 0) {
			ans += x[Math.floor(x.length / 2)];
			ans += x[Math.floor(x.length / 2) - 1];
		} else {
			ans += x[Math.floor(x.length / 2)];
		}
	};

	getMiddle(input);

	console.log(ans);
})();
