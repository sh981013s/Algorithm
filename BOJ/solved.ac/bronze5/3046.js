"use strict";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const firstNum = input[0];
const avgNum = input[1];
const secondNum = avgNum * input.length - firstNum;

console.log(secondNum);
