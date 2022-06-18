"use strict";

(() => {
  /*  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map((str) => str.split(" ").map(Number));*/

  const dn = (num) => {
    return (
      num +
      num
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur)
    );
  };

  const isSelfNumArr = new Array(10000).fill(true);
  const ans = [];

  for (let i = 1; i <= 10000; i++) {
    isSelfNumArr[dn(i)] = false;
  }

  for (let i = 1; i <= 10000; i++) {
    if (isSelfNumArr[i] === true) ans.push(i);
  }

  console.log(ans.join("\n"));
})();
