"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const oldestChild = input[1] + (input[1]-input[0]);

console.log(oldestChild);