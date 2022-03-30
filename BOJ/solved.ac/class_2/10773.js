"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input.toString().trim().split("\n").map(Number).slice(1);

  const stack = [];
  for (let num of realInput) {
    if (num === 0) {
      stack.pop();
    } else {
      stack.push(num);
    }
  }
  if (stack.length === 0) {
    console.log(0);
  } else {
    console.log(stack.reduce((acc, cur) => acc + cur));
  }
})();
