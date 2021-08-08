"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim();

const result = new Array(26).fill(0);

for(let i = 0; i < input.length; i++) {
    result[input.charCodeAt(i)-97] ++;
}

// const max = Math.max(...result);


// const answer = String.fromCharCode()

const a = [1,2,3,4];
const max = Math.max(...a)
console.log(max);

// asddas 