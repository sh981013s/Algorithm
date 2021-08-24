"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

const max = Math.max(...input);

const two = input[0] + input[1] + input[2] - max;

console.log(max <= two ? "YES" : "NO");