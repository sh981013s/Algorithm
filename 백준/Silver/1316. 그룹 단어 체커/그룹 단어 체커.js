"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1);

  let ans = 0;

  for (let word of input) {
    const wordArr = [];
    let isFine = 1;
    for (let letter of word) {
      if (!wordArr.includes(letter)) {
        wordArr.push(letter);
      } else {
        if (wordArr[wordArr.length - 1] !== letter) {
          isFine = 0;
        }
      }
    }
    if (isFine) {
      ans++;
    }
  }

  console.log(ans);
})();
