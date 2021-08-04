"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const firstNum = parseInt(input[0]);
const secondNum = parseInt(input[1]);

console.log(firstNum+secondNum);