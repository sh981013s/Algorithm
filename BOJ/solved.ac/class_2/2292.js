"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const target = +input.toString().trim();
  let cnt = 1;
  let minNum = 1;
  let increaseNum = 6;

  while (minNum < target) {
    cnt++;
    minNum += increaseNum;
    increaseNum += 6;
  }

  console.log(cnt);
})();
