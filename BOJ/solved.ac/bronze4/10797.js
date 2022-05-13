"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const date = +input[0];
  const cars = input[1].split(" ").map(Number);

  let cnt = 0;

  for (let car of cars) {
    if (car === date) cnt++;
  }

  console.log(cnt);
})();
