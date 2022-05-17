"use strict";

(() => {
  const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
  const fs = require("fs");
  const input = `3 4
ohhenrie
charlie
baesangwook
obama
baesangwook
ohhenrie
clinton`
    .toString()
    .trim()
    .split("\n");

  const [N, M] = input.shift().split(" ").map(Number);
  const first = new Set();
  const second = new Set();

  for (let i = 0; i < input.length; i++) {
    if (i < N) {
      first.add(input[i]);
    } else {
      second.add(input[i]);
    }
  }
  const ans = [];
  second.forEach((v) => {
    if (first.has(v)) ans.push(v);
  });
  ans.sort();
  ans.unshift(ans.length);
  console.log(ans.join("\n"));
})();
