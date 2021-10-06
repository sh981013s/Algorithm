let input = `4 11
802
743
457
539`;

input = input.toString().split('\n');

console.log(input);

let need = input.shift().split(' ').map(Number);

need = need[1];
const nums = input.map(Number).sort((a, b) => a - b);

console.log(nums);

const sum = nums.reduce((acc, prev) => acc + prev);

let min = 1,
	max = sum / need,
	mid = 0,
	result = 0;

console.log(max);
