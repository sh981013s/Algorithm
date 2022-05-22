"use strict";

(() => {
  const fs = require("fs");
  const [N, M] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

  if (M === 1 || M === 2) {
    console.log("NEWBIE!");
  } else if (M <= N && N !== 1 && N !== 2) {
    console.log("OLDBIE!");
  } else {
    console.log("TLE!");
  }
})();
