"use strict";

(() => {
  const fs = require("fs");
  const input = +fs.readFileSync("/dev/stdin").toString().trim();

  console.log(String.fromCharCode(input + 44031));
})();
