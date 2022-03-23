"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const [firstLine, ...data] = input.toString().trim().split("\n").map(Number);
  const ansArr = data.sort((a, b) => a - b);
  console.log(ansArr.join("\n"));
})();
