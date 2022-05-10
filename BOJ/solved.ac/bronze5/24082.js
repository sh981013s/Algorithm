"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  console.log(Math.pow(+input, 3));
})();
