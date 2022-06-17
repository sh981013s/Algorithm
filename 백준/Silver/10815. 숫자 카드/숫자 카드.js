"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.split(" ").map(Number));

  const cardMap = new Map();
  for (let card of input[1]) {
    if (cardMap.has(card)) {
      cardMap.set(card, cardMap.get(card) + 1);
    } else {
      cardMap.set(card, 1);
    }
  }

  const ans = [];

  for (let i = 0; i < input[3].length; i++) {
    if (cardMap.has(input[3][i])) {
      ans.push(1);
    } else {
      ans.push(0);
    }
  }

  console.log(ans.join(" "));
})();
