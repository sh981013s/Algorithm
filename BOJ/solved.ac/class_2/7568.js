"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((str) => str.split(" ").map(Number));
  const ans = [];
  for (let i = 0; i < realInput.length; i++) {
    let cnt = 1;
    for (let j = 0; j < realInput.length; j++) {
      if (realInput[i] === realInput[j]) continue;
      if (
        realInput[i][0] < realInput[j][0] &&
        realInput[i][1] < realInput[j][1]
      )
        cnt++;
    }
    ans.push(cnt);
  }
  console.log(ans.join(" "));
})();
