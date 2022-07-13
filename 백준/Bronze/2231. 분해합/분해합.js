"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const givenNum = +input.toString().trim();
  const min = givenNum - givenNum.toString().length * 9;
  let ans = 0;

  for (let i = min; i <= givenNum; i++) {
    const res =
      i +
      i
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur);
    if (res === givenNum) {
      ans = i;
      break;
    }
  }
  console.log(ans);
})();