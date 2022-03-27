"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const [instruc, ...data] = input.toString().trim().split("\n");

  const maxNum = instruc.split(" ").map(Number)[1];
  const cards = data[0].split(" ").map(Number);
  let ans = -Infinity;

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      for (let k = j + 1; k < cards.length; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum > ans && sum <= maxNum) ans = sum;
      }
    }
  }
  console.log(ans);
})();
