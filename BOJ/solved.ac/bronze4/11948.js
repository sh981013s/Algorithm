"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  let first = input.slice(0, 4).sort((a, b) => b - a);
  first.pop();
  first = first.reduce((acc, cur) => acc + cur, 0);
  let second = input.slice(4).sort((a, b) => b - a);
  second.pop();
  second = second.reduce((acc, cur) => acc + cur, 0);

  console.log(first + second);
})();
