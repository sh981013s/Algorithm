"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const caseCount = Number(input[0]);
let result = "";

for(let i = 1; i <= caseCount; i++) {
    let count = Number(input[i].split(" ")[0]);
    let givenString = input[i].split(" ")[1];

    for(let j = 0; j < givenString.length; j++) {
        for(let k = 0; k < count; k++) {
            result += givenString[j];
        }
    }
    result += "\n"
}

console.log(result);
