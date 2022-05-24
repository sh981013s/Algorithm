"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  console.log(Math.floor(Math.min(...input) / 2));
})();
