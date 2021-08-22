"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const firstNum = Number(input[0].split('').reverse().join(''));
const secondNum = Number(input[1].split('').reverse().join(''));

console.log(firstNum > secondNum ? firstNum : secondNum );