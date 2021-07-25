var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

const firstNum = parseInt(input[0]);
const secondNum = parseInt(input[1]);

const three = firstNum * (secondNum % 10);
const four = firstNum * Math.floor((secondNum % 100)/10);
const five = firstNum * Math.floor(secondNum / 100);

console.log(three);
console.log(four);
console.log(five);
console.log(three+(four*10)+(five*100));
