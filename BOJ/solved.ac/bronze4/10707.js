"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const total = input[4];
  const first = total * input[0];
  const second =
    total <= input[2] ? input[1] : input[1] + (total - input[2]) * input[3];

  if (first > second) {
    console.log(second);
  } else {
    console.log(first);
  }
})();
