"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [A, B] = input[0].split(" ").map(Number);
  const [C, D] = input[1].split(" ").map(Number);
  const answer = A + D >= B + C ? B + C : A + D;
  console.log(answer);
})();
