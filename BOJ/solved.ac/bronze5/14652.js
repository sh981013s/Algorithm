"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const n = input[0];
const m = input[1];
const k = input[2];

const yAxis = Math.floor(k/m);
const xAxis = k % m ;

console.log(`${yAxis} ${xAxis}`);