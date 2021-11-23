const input = `5
87 89 92 100 76`;

let realInput = input.split('\n');
const N = parseInt(realInput.shift());

console.log(realInput);
realInput = realInput[0].split(' ').map(Number);

const sorted = realInput.sort((a, b) => b - a);

let ans = [];
console.log(sorted);

// let answer = Array.from({ length: N }, () => 1);
let answer = Array.from({ length: N }, () => 1);
console.log(answer);

sorted.map((e, idx) => {});
