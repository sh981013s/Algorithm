"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input.toString().trim().split("\n").map(Number);

  const minBurger = Math.min(realInput[0], realInput[1], realInput[2]);
  const minDrink = Math.min(realInput[3], realInput[4]);

  console.log(minBurger + minDrink - 50);
})();
