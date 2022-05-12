"use strict";

(() => {
  const fs = require("fs");
  // const input = fs.readFileSync("/dev/stdin").toString().trim();
  const input = "10110111".toString().trim();
  const bin = BigInt("0b" + input);
  console.log((bin * 17n).toString(2));
})();
