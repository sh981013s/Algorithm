"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(BigInt);


const findLeft = x => BigInt(x) % BigInt(20000303);

console.log((findLeft(input[0])).toString());
