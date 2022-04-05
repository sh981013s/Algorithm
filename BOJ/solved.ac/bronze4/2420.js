"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input.toString().trim().split(" ").map(Number);

  console.log(Math.abs(realInput[0] - realInput[1]));
})();
