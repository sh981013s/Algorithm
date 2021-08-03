"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(BigInt);

const answer = (x, y) => x + y;

console.log(parseInt(answer(input[0], input[1])));