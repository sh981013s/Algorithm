var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = (process.platform === 'linux'
// ? fs.readFileSync('/dev/stdin').toString(): 
// `1 2`
// ).split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);