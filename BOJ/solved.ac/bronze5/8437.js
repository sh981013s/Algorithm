"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);

const total = input[0];
const diff = input[1];

console.log(((total + diff) / 2n).toString());
console.log(((total - diff) / 2n).toString());
