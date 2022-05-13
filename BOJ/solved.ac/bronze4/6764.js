"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const set = new Set(input);

  if (input[0] < input[1] && input[1] < input[2] && input[2] < input[3]) {
    console.log("Fish Rising");
  } else if (
    input[0] > input[1] &&
    input[1] > input[2] &&
    input[2] > input[3]
  ) {
    console.log("Fish Diving");
  } else if ([...set].length === 1) {
    console.log("Fish At Constant Depth");
  } else {
    console.log("No Fish");
  }
})();
