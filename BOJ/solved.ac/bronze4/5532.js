"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const [total, kook, math, kookSingle, mathSingle] = input
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const days = [Math.ceil(kook / kookSingle), Math.ceil(math / mathSingle)];
  console.log(total - Math.max(...days));
})();
