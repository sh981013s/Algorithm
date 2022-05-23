"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
  const max = +input[0];
  const [coke, beer] = input[1].split(" ").map(Number);
  const ans = Math.floor(coke / 2) + beer;

  console.log(ans >= max ? max : ans);
})();
