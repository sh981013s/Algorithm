"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const first = input[0].split(" ").map(Number);
  const second = input[1].split(" ").map(Number);

  const getScore = (arr) => {
    return arr[0] * 6 + arr[1] * 3 + arr[2] * 2 + arr[3] * 1 + arr[4] * 2;
  };

  console.log(`${getScore(first)} ${getScore(second)}`);
})();
