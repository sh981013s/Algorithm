"use strict";

(() => {
  const fs = require("fs");
  const [initial, target, ...input] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  let time = 0;

  if (initial < 0) {
    time += Math.abs(initial) * input[0] + input[1] + target * input[2];
  } else {
    time += (target - initial) * input[2];
  }

  console.log(time);
})();
