"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const numArr = ("9780921418" + input.join("")).split("").map(Number);

  const ans = numArr.reduce((acc, cur, idx) => {
    if (idx % 2) {
      return acc + cur * 3;
    } else {
      return acc + cur;
    }
  }, 0);

  console.log(`The 1-3-sum is ${ans}`);
})();
