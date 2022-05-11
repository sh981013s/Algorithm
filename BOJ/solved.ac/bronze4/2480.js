"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  const obj = {};

  for (let num of input) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  const objLength = Object.keys(obj).length;

  if (objLength === 1) {
    console.log(10000 + Object.keys(obj)[0] * 1000);
  } else if (objLength === 2) {
    const num = Object.keys(obj).find((num) => obj[num] === 2);
    console.log(1000 + num * 100);
  } else {
    const num = Math.max(...Object.keys(obj));
    console.log(num * 100);
  }
})();
