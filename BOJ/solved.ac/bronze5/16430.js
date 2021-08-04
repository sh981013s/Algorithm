"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const answer = (x, y) => console.log(`${y-x} ${y}`);
answer(input[0], input[1]);
