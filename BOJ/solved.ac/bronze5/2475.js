"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num = [];
let lastNum = 0;

for (let i=0;i<5;i++){
    num[i] = Math.pow(input[i], 2);
    lastNum += num[i];
}

console.log(lastNum%10);

