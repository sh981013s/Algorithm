"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const [up, down, height] = input.toString().trim().split(" ").map(Number);

  const neededHeight = height - down;

  console.log(Math.ceil(neededHeight / (up - down)));
})();
