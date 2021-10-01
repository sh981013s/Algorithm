const input = `20 7 23 19 10 15 25 8 13`;

const heights = input.trim().split(' ').map(Number);

const sum = heights.reduce((acc, prev) => acc + prev);

for (let i = 0; i < heights.length; i++) {
	for (let j = i + 1; j < heights.length; j++) {
		if (sum - (heights[i] + heights[j]) === 100) {
			heights.splice(j, 1);
			heights.splice(i, 1);
		}
	}
}

console.log(heights.join(' '));
