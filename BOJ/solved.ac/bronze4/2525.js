"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const [hr, min] = input[0].split(" ").map(Number);
  const givenMin = +input[1];

  const addedHr = (hr + Math.floor((min + givenMin) / 60)) % 24;
  const addedMin = (min + givenMin) % 60;

  console.log(`${addedHr} ${addedMin}`);
})();
