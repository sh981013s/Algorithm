"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  console.log(
    input
      .toString()
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
      .join(" ")
  );
})();
