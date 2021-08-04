"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const answer = x => console.log(x - 1946);
answer(input[0]);
