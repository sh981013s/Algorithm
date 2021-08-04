"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const findOutput = x => x * ( x-1 );

console.log(findOutput(input[0]))

