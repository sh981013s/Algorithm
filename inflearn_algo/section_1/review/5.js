const input = `5 3 7 11 2 15 17`;

const nums = input.trim().split(' ').map(Number);

const smallest = Math.min(...nums);

console.log(smallest);
