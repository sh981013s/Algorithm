"use strict";

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');


const pieces = [1, 1, 2, 2, 2, 8];

function difference() {
    let answer = '';
    for (let i = 0;i < pieces.length; i++) {
        answer += pieces[i] - input[i] + ' ';
    };
    console.log(answer);
};

difference();
