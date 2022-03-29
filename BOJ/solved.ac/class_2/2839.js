"use strict";

(() => {
  const fs = require("fs");
  const input = +fs.readFileSync("/dev/stdin").toString().trim();
  let isPossible = 0;

  for (let i = Math.floor(input / 5); i >= 0; i--) {
    const base = i * 5;
    const needed = input - base;
    if (needed % 3 === 0) {
      isPossible = 1;
      console.log(i + needed / 3);
      break;
    }
  }

  if (!isPossible) console.log(-1);
})();
