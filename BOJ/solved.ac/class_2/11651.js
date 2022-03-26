"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");

  let inputArr = input.toString().trim().split("\n");
  inputArr.shift();
  inputArr = inputArr.map((str) => str.split(" ").map(Number));
  let ans = "";
  inputArr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - a[1];
    return a[1] - b[1];
  });
  inputArr.forEach((arr) => (ans += `${arr[0]} ${arr[1]}\n`));
  console.log(ans);
})();
