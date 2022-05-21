"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  if (input.reduce((acc, cur) => acc + cur) >= 100) {
    console.log("OK");
  } else {
    const lowestIdx = input.indexOf(Math.min(...input));
    console.log(
      lowestIdx === 0 ? "Soongsil" : lowestIdx === 1 ? "Korea" : "Hanyang"
    );
  }
})();
