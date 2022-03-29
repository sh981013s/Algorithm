"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input.toString().trim().split("\n").slice(1);
  const ans = [];

  for (let str of realInput) {
    const stack = [];
    let isPossible = 1;
    for (let char of str) {
      if (char === "(") {
        stack.push("(");
      } else {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          isPossible = 0;
          break;
        }
      }
    }
    ans.push(stack.length === 0 && isPossible ? "YES" : "NO");
  }
  console.log(ans.join("\n"));
})();
