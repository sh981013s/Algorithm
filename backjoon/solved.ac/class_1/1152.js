"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let countOfWords = 0;

input.forEach(function(element){
    if(element !== "") {
        countOfWords++;
    }
});

console.log(countOfWords);