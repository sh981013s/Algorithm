"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.split(" "))
    .map((arr, idx) => [+arr[0], arr[1], idx]);

  realInput.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[2] - b[2];
    } else {
      return a[0] - b[0];
    }
  });

  console.log(realInput.map((arr) => arr[0] + " " + arr[1]).join("\n"));
})();
