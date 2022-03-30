"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const [n, k] = input.toString().trim().split(" ").map(Number);

  const ans = [];
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j === k) {
        ans.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }

  console.log("<" + ans.join(", ") + ">");
})();
