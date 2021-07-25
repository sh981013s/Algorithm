var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split(' ');
// const input = `1 2`.toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);