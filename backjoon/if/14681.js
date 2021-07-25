"use strict";

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const xAxis = parseInt(input[0]);
const yAxis = parseInt(input[1]);

function quadrant() {
    if (xAxis > 0 && yAxis > 0) {
        console.log(1);
    } else if (xAxis < 0 && yAxis > 0) {
        console.log(2);
    } else if (xAxis < 0 && yAxis < 0) {
        console.log(3);
    } else {
        console.log(4);
    }
};

quadrant();