"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(' ');

let resultArr = [];
let result = '';

console.log(input[0].indexOf('b'));

for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i);

  for (let j = 0; j < input.length; j++) {
    resultArr.push(input[0].indexOf(alphabet));
  }
}

result = resultArr.join(' ');
console.log(result);