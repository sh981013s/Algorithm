var fs = require('fs');
const input = (process.platform === 'linux'
? fs.readFileSync('/dev/stdin').toString(): 
`1 2`
).split(' ');

const firstNum = parseInt(input[0]);
const secondNum = parseInt(input[1]);

console.log(firstNum/secondNum);

