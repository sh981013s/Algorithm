"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);

const findHim = input => input / 5;

console.log(Math.ceil(findHim(input[0])));