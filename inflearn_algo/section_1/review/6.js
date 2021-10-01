const input = `12 77 38 41 53 92 85`;

const nums = input.trim().split(' ').map(Number);

let oddNums = [];

for (num of nums) {
	if (num % 2 !== 0) oddNums.push(num);
}

const sumOfOddNums = oddNums.reduce((acc, prev) => acc + prev);

const smallestOfOddNums = Math.min(...oddNums);

console.log(sumOfOddNums);
console.log(smallestOfOddNums);
