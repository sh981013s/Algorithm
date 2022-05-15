"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const first = parseInt(input[0], 2);
  const second = parseInt(input[1], 2);

  console.log((first * second).toString(2));
})();
