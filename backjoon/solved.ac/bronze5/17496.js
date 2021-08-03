"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const answer = (a, b, c, d) => {
    const fruit = parseInt((a-1)/b);
    const total = fruit * c;
    console.log(total*d);
};

answer(input[0], input[1], input[2], input[3]);