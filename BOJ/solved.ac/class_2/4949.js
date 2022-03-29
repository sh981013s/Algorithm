"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input.toString().trim().split("\n");
  const ans = [];
  realInput.pop();

  for (let singleLine of realInput) {
    const stack = [];
    let isCorrect = 1;
    for (let char of singleLine) {
      if (char === "(") {
        stack.push("(");
      } else if (char === ")") {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          isCorrect = 0;
          break;
        }
      } else if (char === "[") {
        stack.push("[");
      } else if (char === "]") {
        if (stack[stack.length - 1] === "[") {
          stack.pop();
        } else {
          isCorrect = 0;
          break;
        }
      }
    }
    ans.push(stack.length === 0 && isCorrect ? "yes" : "no");
  }
  console.log(ans.join("\n"));
})();
