"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number)
    .slice(0, -1);

  function isPrime(num) {
    if (num === 2) {
      return true;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  const ans = [];

  for (let singleNum of input) {
    let cnt = 0;
    for (let i = singleNum + 1; i <= singleNum * 2; i++) {
      if (isPrime(i)) cnt++;
    }
    ans.push(cnt);
  }

  console.log(ans.join("\n"));
})();
