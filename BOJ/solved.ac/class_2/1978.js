"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  let ans = 0;
  const data = input.toString().trim().split("\n")[1].split(" ").map(Number);
  for (let num of data) {
    if (isPrime(num)) ans++;
  }
  console.log(ans);
})();
