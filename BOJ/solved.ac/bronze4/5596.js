"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input
    .toString()
    .trim()
    .split("\n")
    .map(
      (str) =>
        str
          .split(" ")
          .map(Number)
          .reduce((acc, cur) => acc + cur),
      0
    );

  console.log(Math.max(...realInput));
})();
