"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  let [hr, min, sec] = input[0].split(" ").map(Number);
  const givenSec = +input[1];

  sec += givenSec;

  if (sec >= 60) {
    min += Math.floor(sec / 60);
    sec %= 60;
  }
  if (min >= 60) {
    hr += Math.floor(min / 60);
    min %= 60;
  }
  hr = Math.floor(hr % 24);

  console.log(`${hr} ${min} ${sec}`);
})();
