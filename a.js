const motionData = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const motionData2 = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const motionDataCount = 3;

let bowl = [];

/*for (var i = 0; i < motionData.length; i++) {
	let count = 0;

	const resultData = motionData2.splice(count, count + motionDataCount);
	count = count + motionDataCount;
	bowl = [...bowl, ...resultData];
	console.log(bowl);
}
console.log(bowl, 'bowl');*/

motionData.map((x) => {
	console.log(x);
});
