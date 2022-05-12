"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const ans = input.reduce((acc, cur) => {
    if (cur <= 40) return acc + 40;
    return acc + cur;
  }, 0);
  console.log(ans / input.length);
})();
