"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);

const studentNum = input[0];

let das = Math.floor(studentNum / 12);

if (studentNum % 12 !== 0) {
    das += 1
}

console.log(das);