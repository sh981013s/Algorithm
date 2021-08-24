"use strict";

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);

let answer;

if (input[0]<input[1]) answer=input[0];
else answer=input[1];

if (input[2]<answer) answer=input[2];
else answer=answer;

console.log(answer);