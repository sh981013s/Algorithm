"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  const primeArr = [];

  for (let i = input[0]; i <= input[1]; i++) {
    if (isPrime(i)) primeArr.push(i);
  }

  const ans = [];

  primeArr.length > 0
    ? ans.push(primeArr.reduce((acc, cur) => acc + cur))
    : ans.push(-1);
  if (primeArr.length > 0) ans.push(Math.min(...primeArr));

  console.log(ans.join("\n"));
})();
