"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const total = input.reduce((acc, cur) => acc + cur, 0);

  const set = new Set(input);

  if (total === 180 && [...set].length === 1) {
    console.log("Equilateral");
  } else if (total === 180 && [...set].length === 2) {
    console.log("Isosceles");
  } else if (total === 180 && [...set].length === 3) {
    console.log("Scalene");
  } else {
    console.log("Error");
  }
})();
