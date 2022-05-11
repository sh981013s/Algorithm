"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  if (input[1] >= input[2]) {
    console.log(-1);
  } else {
    console.log(Math.floor(input[0] / (input[2] - input[1])) + 1);
  }

  /*  let cnt = 0;

  while (input[0] + input[1] * cnt > cnt * input[2]) {
    cnt++;
  }*/

  // console.log(cnt + 1);
})();
