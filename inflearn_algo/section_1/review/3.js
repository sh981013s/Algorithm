const input = `178`;

const numOfStudnets = parseInt(input);

let cnt = 0;

if (numOfStudnets % 12 !== 0) {
	cnt = Math.floor(numOfStudnets / 12);
	cnt++;
} else {
	cnt = numOfStudnets / 12;
}

console.log(cnt);
