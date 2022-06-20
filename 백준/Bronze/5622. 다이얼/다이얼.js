"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

  const arr = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"],
    ["J", "K", "L"],
    ["M", "N", "O"],
    ["P", "Q", "R", "S"],
    ["T", "U", "V"],
    ["W", "X", "Y", "Z"],
  ];

  let ans = 0;

  for (let singleStr of input) {
    let caseTime = 2;
    for (let dial of arr) {
      caseTime++;
      if (dial.includes(singleStr)) {
        ans += caseTime;
        break;
      }
    }
  }

  console.log(ans);
})();
