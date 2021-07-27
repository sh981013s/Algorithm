"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);


function getScore() {
    let sum = 0;

    for (let i = 0;i < input.length; i++){
        sum += input[i]
    };
    console.log(sum);
};

getScore();



