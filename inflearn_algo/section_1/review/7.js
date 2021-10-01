const input = `0
12 20 54 30 87 91 30`;

const realInput = input.split('\n');

const date = parseInt(realInput[0]);
const cars = realInput[1].trim().split(' ').map(Number);

let cnt = 0;

for (let car of cars) {
	const num = car % 10;
	if (num === date) cnt++;
}

console.log(cnt);
