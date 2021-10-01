const input = `6 5 11`;

const nums = input.toString().trim().split(' ').map(Number);

const answer = Math.min(...nums);

console.log(answer);
