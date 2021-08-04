"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';

const givenInfo = input[0].split(' ').map(function(s) {
    return parseInt(s,10);
});

const news = input[1].split(' ').map(function(s) {
    return parseInt(s, 10);
});

const realNum = givenInfo[0] * givenInfo[1];

for(let i=0;i<news.length;i++){
    result += news[i] - realNum + ' ';
};

console.log(result);


