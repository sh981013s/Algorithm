const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let K = 0;
let answer = '';
// 원반 갯수, 출발지 기둥, 목적지 기둥, 나머지 기둥
function hanoi(num, from, to, other) {
    if(num === 0) {
        return;}
    hanoi(num-1, from, other, to);
    // console.log(`${from} ${to}`);
    answer += `${from} ${to}` + '\n';
    K++;
    hanoi(num-1, other, to, from);
}

hanoi(N,1,3,2)
console.log(K);
console.log(answer);