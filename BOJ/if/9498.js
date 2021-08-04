"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ');

const grade = parseInt(input[0]);

if (90 <= grade && grade <= 100) {
    console.log('A');
} else if (80 <= grade && grade <= 89) {
    console.log('B');
} else if (70 <= grade && grade <= 79) {
    console.log('C');
} else if (60 <= grade && grade <= 69) {
    console.log('D');
} else {
    console.log('F');
};