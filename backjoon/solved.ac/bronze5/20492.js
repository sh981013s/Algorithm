"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const answer = x => {
    const a = x - (x*0.22);
    const b = x - ((x-(x*0.8)) * 0.22);
    console.log(`${a} ${b}`)
};

answer(input[0]);