"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().toLocaleLowerCase();

const result = new Array(26).fill(0);

for(let i = 0; i < input.length; i++) {
    console.log(`input alph =  ${input[i]}`);
    console.log(`charcode of ${input[i]} = ${input[i].charCodeAt(0)}`);
    console.log(input.charCodeAt(i));
    console.log(input.charCodeAt(i)-97);
    result[input.charCodeAt(i)-97] ++;
    console.log(result[input.charCodeAt(i)-97]);
}

// const b = "b".charCodeAt(0);
// console.log(b);


// const a = [1,2,3,4];
// const max = Math.max(...a)
// console.log(max);
