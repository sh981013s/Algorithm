"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.split(" ").map(Number));

  console.log(realInput);
  realInput.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  console.log(realInput.map((arr) => `${arr[0]} ${arr[1]}`).join("\n"));
})();
