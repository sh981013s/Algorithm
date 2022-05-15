"use strict";

(() => {
  const fs = require("fs");
  const [A, B, C] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  console.log(Math.floor(Math.max((A * B) / C, (A / B) * C)));
})();
