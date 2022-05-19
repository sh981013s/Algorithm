"use strict";

(() => {
  const fs = require("fs");
  const [K, D, A] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("/")
    .map(Number);

  if (D === 0 || K + A < D) {
    console.log("hasu");
  } else {
    console.log("gosu");
  }
})();
