var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const firstNum = parseInt(input[0]);
const secondNum = parseInt(input[1]);

console.log(firstNum+secondNum);
console.log(firstNum-secondNum);
console.log(firstNum*secondNum);
console.log(Math.floor(firstNum/secondNum));
console.log(firstNum%secondNum);

