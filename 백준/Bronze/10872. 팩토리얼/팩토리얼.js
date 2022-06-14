"use strict";

(() => {
  const fs = require("fs");
  const input = +fs.readFileSync("/dev/stdin").toString().trim();

  let b = 1;

  for (let i = 1; i <= input; i++) {
    b *= i;
  }

  console.log(b);
})();
