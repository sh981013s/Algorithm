"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const a = input.pop() + input.shift();
  const sum = input.reduce((acc, cur) => acc + cur);

  console.log(Math.abs(a - sum));
})();
