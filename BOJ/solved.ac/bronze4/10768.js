"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const special = [2, 18];

  if (special[0] === input[0] && special[1] === input[1]) {
    console.log("Special");
  } else if (special[0] > input[0]) {
    console.log("Before");
  } else if (special[0] < input[0]) {
    console.log("After");
  } else {
    if (special[1] > input[1]) {
      console.log("Before");
    } else {
      console.log("After");
    }
  }
})();
