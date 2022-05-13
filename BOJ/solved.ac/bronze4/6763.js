"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
  const exceedSpeed = input[1] - input[0];

  if (exceedSpeed <= 0) {
    console.log("Congratulations, you are within the speed limit!");
  } else if (1 <= exceedSpeed && exceedSpeed <= 20) {
    console.log(`You are speeding and your fine is $100.`);
  } else if (21 <= exceedSpeed && exceedSpeed <= 30) {
    console.log(`You are speeding and your fine is $270.`);
  } else {
    console.log(`You are speeding and your fine is $500.`);
  }
})();
