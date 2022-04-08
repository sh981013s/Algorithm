"use strict";

(() => {
  const fs = require("fs");
  const input = +fs.readFileSync("/dev/stdin").toString().trim();

  const ans = [];
  for (let i = input; i >= 1; i--) {
    ans.push("*".repeat(i));
  }
  console.log(ans.join("\n"));
})();
